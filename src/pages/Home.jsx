import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Thumb from "../components/Thumb";
import { NavLink } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <div className="homecontainer">
        <div className="homebanner">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
        <div className="thumbcontainer">
          {data.map((lodging) => (
            <NavLink key={lodging.id} to={"/lodgingpage/" + lodging.id}>
              <Thumb cover={lodging.cover} title={lodging.title} />
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
