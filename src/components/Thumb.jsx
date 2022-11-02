import React from "react";

const Thumb = ({ cover, title }) => {
  return (
    <div className="thumb">
      <img src={cover} alt="lodging" />
      <h2>{title}</h2>
    </div>
  );
};

export default Thumb;
