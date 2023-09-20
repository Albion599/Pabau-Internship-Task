import React from 'react';
import "./Footer.scss";
import Logo from "../../Assets/logo-albion.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
         <p>Powered by </p>
         <img src={Logo} alt="Albion Logo" className="footer-image" />
      </div>
    </footer>
  );
};


export default Footer;
