import React from "react";
import "./LinkInput.css";

const LinkInput = () => {
  return (
    <div className="linkInput-wrapper">
      <div className="linkInput-container">
        <div className="link-content">
          <input type="url" placeholder="Shorten a link here..." />
          <button className="shorten-link-button">Shorten it!</button>
        </div>
      </div>
    </div>
  );
};

export default LinkInput;
