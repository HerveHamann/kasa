import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error404">
      <Header />
      <div className="error404containt">
        <h1>404</h1>
        <h2>
          Oups! La page que <br className="behide" /> vous demandez n'existe pas.
        </h2>
        <NavLink to="/">
          <p>Retourner sur la page d'acceuil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
