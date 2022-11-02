import React, { useState } from "react";
import arrowdown from "../assets/img/arrowdown.svg";
import arrowup from "../assets/img/arrowup.svg";

const Accordion = ({ header, description, text, equipments }) => {
  const [opened, setOpened] = useState(false);

  let content = "";
  if (header === "Description") {
    content = description;
  } else if (header === "Equipements") {
    content = equipments;
  } else {
    content = text;
  }

  return (
    <div className={content === text ? "aboutaccordion" : "accordion"}>
      <div className="title" onClick={() => (opened ? setOpened(false) : setOpened(true))}>
        <p>{header}</p>
        <img src={opened ? arrowdown : arrowup} alt="arrow" className="arrowupdown" />
      </div>
      <div className={opened ? "container" : "container-closed"}>
        {description || text
          ? content
          : content.map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
      </div>
    </div>
  );
};

export default Accordion;
