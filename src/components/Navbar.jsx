import React, { useState } from "react";
import "./Navbar.css";
import shortly from "../assets/images/logo.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
  const windowWidth = useMediaQuery();
  const isSmall = windowWidth <= 767;

  const [showMenu, setShowMenu] = useState(false);
  // const [isSmall, setIsSmall] = useState(true); // placeholder to work on
  // const isSmallScreen = window.matchMedia(767).matches;

  return (
    <div className="navbar-container">
      <div
        className={isSmall ? (showMenu ? "navbar-active" : "navbar") : "navbar"}
      >
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

          <div
            className={
              isSmall
                ? showMenu
                  ? "nav-buttons-active"
                  : "nav-buttons"
                : "nav-buttons"
            }
          >
            <hr />
            <button>Login</button>
            <button className="sign-up-button">Sign Up</button>
          </div>
        </nav>
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
