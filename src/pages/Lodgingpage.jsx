import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Slider from "../components/Slider";
import Accordion from "../components/Accordion";
import Error404 from "./Error404";

const Lodgingpage = ({ data }) => {
  const { id } = useParams();

  const item = data.find((item) => item.id === id);
  if (!item) {
    return <Error404 />;
  } else {
    const { description, equipments, host, location, pictures, rating, tags, title } = item;

    return (
      <div className="lodgingpage">
        <Header />
        <Slider pictures={pictures} />
        <div className="maincontainer">
          <div className="maininfo">
            <h1>{title}</h1>
            <p>{location}</p>
            <div className="tagcontainer">
              {tags.map((tag, index) => (
                <Tag key={index} tags={tag} />
              ))}
            </div>
          </div>
          <div className="secondaryinfo">
            <div className="hostinfo">
              <p>{host.name}</p>
              <img className="profile" src={host.picture} alt="host" />
            </div>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="detailedinfo">
          <Accordion header="Description" description={description} />
          <Accordion header="Equipements" equipments={equipments} />
        </div>
        <Footer />
      </div>
    );
  }
};
export default Lodgingpage;
