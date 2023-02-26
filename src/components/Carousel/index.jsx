import "./carousel.scss";
import React, { useState } from "react";
import Vector_left from "assets/image/Vector_left.png";
import Vector_right from "assets/image/Vector_right.png";

function Carousel({ photo }) {
  const [index, setIndex] = useState(0);
  const length = photo.length;
  console.log("PHOTO", photo);

  // a chaque fois qu'on clique, cela met a jour index qui sera égale a -1
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  // a chaque fois qu'on clique, cela met a jour index qui sera égale a +1
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      {photo?.length > 1 && (
        <img
          className="arrow arrow_left"
          src={Vector_left}
          alt="pic-arrow-left"
          onClick={handlePrevious}
        />
      )}

      {photo?.map((photo, cle) => {
        return (
          <img
            key={cle}
            className={cle === index ? "carrousel_img actif" : "carrousel_img"}
            src={photo}
            alt="pic_carousel"
          />
        );
      })}

      {photo?.length > 1 && (
        <img
          className="arrow arrow_right"
          src={Vector_right}
          alt="pic-arrow-right"
          onClick={handleNext}
        />
      )}
    </div>
  );
}

export default Carousel;
