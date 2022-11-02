import React, { useState } from "react";
import greystar from "../assets/img/greystar.svg";
import redstar from "../assets/img/redstar.svg";
const Rating = ({ rating }) => {
  const initSatisfaction = parseInt(rating);
  const [statisfaction, setStatisfaction] = useState(initSatisfaction);
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div>
      {starNumber.map((number) => (
        <img
          className="star"
          key={number}
          src={statisfaction >= number ? redstar : greystar}
          alt="star"
          onClick={() => (statisfaction !== number ? setStatisfaction(number) : setStatisfaction(number - 1))}
        />
      ))}
    </div>
  );
};

export default Rating;
