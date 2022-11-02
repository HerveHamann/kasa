import React, { useState } from "react";

import arrowleft from "../assets/img/arrowleft.svg";
import arrowright from "../assets/img/arrowright.svg";

const Slider = ({ pictures }) => {
  const [displayedImage, setDisplayedImage] = useState(pictures[0]);
  let i = pictures.indexOf(displayedImage);

  return (
    <div className="slider">
      <img src={displayedImage} alt="name" className="displayedimage" />
      <img
        src={arrowleft}
        alt="arrowleft"
        className={pictures.length > 1 ? "arrowleft" : "hide"}
        onClick={() =>
          displayedImage === pictures[0]
            ? setDisplayedImage(pictures[pictures.length - 1])
            : setDisplayedImage(pictures[i - 1])
        }
      />
      <img
        src={arrowright}
        alt="arrowright"
        className={pictures.length > 1 ? "arrowright" : "hide"}
        onClick={() =>
          displayedImage === pictures[pictures.length - 1]
            ? setDisplayedImage(pictures[0])
            : setDisplayedImage(pictures[i + 1])
        }
      />
      <p className={pictures.length > 1 ? "slidenumber" : "hide"}>
        {i + 1}/{pictures.length}
      </p>
    </div>
  );
};

export default Slider;
