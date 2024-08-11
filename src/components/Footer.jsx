import React from "react";
import "./Footer.css";
import hero from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-hero">
          <img src={hero} alt="hero" />
        </div>
        <div className="footer-links">
          <div className="footer-link-features links">
            <p>Features</p>
            <a href="/">Link Shortening</a>
            <a href="/">Branded Links</a>
            <a href="/">Analytics</a>
          </div>
          <div className="footer-link-resources links">
            <p>Resources</p>
            <a href="/">Blog</a>
            <a href="/">Developers</a>
            <a href="/">Support</a>
          </div>
          <div className="footer-link-company links">
            <p>Company</p>
            <a href="/">About</a>
            <a href="/">Our Team</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div className="footer-social-container">
          <div className="footer-social">
            <a href="/">
              {" "}
              <img src={facebook} alt="" />
            </a>
          </div>
          <div className="footer-social">
            <a href="/">
              {" "}
              <img src={twitter} alt="" />
            </a>
          </div>
          <div className="footer-social">
            <a href="/">
              {" "}
              <img src={pinterest} alt="" />
            </a>
          </div>
          <div className="footer-social">
            <a href="/">
              {" "}
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
