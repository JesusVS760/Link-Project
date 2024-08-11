import React from "react";
import hero from "../assets/images/illustration-working.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="get-started-button"> Get Started</button>
      </div>
      <div className="header-hero">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Header;
