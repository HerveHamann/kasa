import React from "react";
import headerlogo from "../../assets/img/headerlogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={headerlogo} className="logo" alt="logo" />
      </NavLink>

      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
