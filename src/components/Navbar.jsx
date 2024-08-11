import React from "react";
import "./Navbar.css";
import shortly from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <nav>
          <img src={shortly} alt="" /> <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </nav>
        <div className="nav-buttons">
          <button>Login</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
