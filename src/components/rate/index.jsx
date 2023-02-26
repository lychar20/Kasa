import none_filled_star from "assets/image/none_filled_star.svg";
import filled_star from "assets/image/filled_star.svg";
import "./rate.scss";

function Rate({ rate }) {
  const rateRange = [1, 2, 3, 4, 5];
  const rateValue = rate;

  return (
    <>
      <div className="rate">
        {rateRange.map((rangeElem) =>
          rateValue >= rangeElem ? (
            <img
              key={rangeElem.toString()}
              className="filled_stars"
              src={filled_star}
              alt="filled-star"
            />
          ) : (
            <img
              key={rangeElem.toString()}
              className="none_filled_star"
              src={none_filled_star}
              alt="none-filled-star"
            />
          )
        )}
      </div>
    </>
  );
}

export default Rate;
