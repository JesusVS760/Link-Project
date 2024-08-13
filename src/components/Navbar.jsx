import React, { useState } from "react";
import "./Navbar.css";
import shortly from "../assets/images/logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className={showMenu ? "navbar-active" : "navbar"}>
        <div className="hero-image">
          <img src={shortly} alt="" />
        </div>

        <nav>
          <a className="item" href="/">
            Features
          </a>
          <a className="item" href="/">
            Pricing
          </a>
          <a className="item" href="/">
            Resources
          </a>
        </nav>
        <div className="nav-buttons">
          <button>Login</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
      <div onClick={() => setShowMenu(!showMenu)} className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        {/* {showMenu ? (
          <div className="mobile-options">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
          </div>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
