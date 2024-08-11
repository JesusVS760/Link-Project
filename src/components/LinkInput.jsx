import React, { useEffect, useState } from "react";
import "./LinkInput.css";

const LinkInput = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="linkInput-wrapper">
      <div className="linkInput-container">
        <div className="link-content">
          <div className="link-content-input">
            <input
              type="url"
              onChange={() => setIsEmpty(true)}
              placeholder="Shorten a link here..."
            />
            {!isEmpty ? <p className="add-link">Please add a link!</p> : ""}
          </div>
          <div className="div"></div>
          <button className="shorten-link-button">Shorten it!</button>
        </div>
      </div>
    </div>
  );
};

export default LinkInput;
