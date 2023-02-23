import React, { useState } from "react";
import "./collapse.scss";
import Vectorup from "assets/image/Vectorup.png";
import Vector from "assets/image/Vector.png";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapse">
      <div className="collapse_button" onClick={() => setIsOpen(false)}>
        <h2 className="collapse_titre">
          {" "}
          {props.aboutTitle}{" "}
          <img src={Vectorup} alt="chevronup" className="chevron up" />
        </h2>
      </div>

      <div className="collapse_text">{props.aboutText}</div>
    </div>
  ) : (
    <div className="collapse_close">
      <div className="collapse_close_button" onClick={() => setIsOpen(true)}>
        <h2 className="collapse_titre">
          {" "}
          {props.aboutTitle}{" "}
          <img src={Vector} alt="chevronup" className="chevron" />{" "}
        </h2>
      </div>
    </div>
  );
}

export default Collapse;
