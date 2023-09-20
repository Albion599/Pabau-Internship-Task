import React from 'react';
import "./Header.scss";

const Header = ({ currentStep }) => {
  return (
    <header>
      <h3>Choose Service</h3>
      <p>Step {currentStep}</p>
    </header>
  );
};

export default Header;
