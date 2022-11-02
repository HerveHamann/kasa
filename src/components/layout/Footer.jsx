import React from "react";
import footerlogo from "../../assets/img/footerlogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerlogo} alt="logo" />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  );
};

export default Footer;
