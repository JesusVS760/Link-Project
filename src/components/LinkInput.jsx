import React, { useEffect, useState } from "react";
import "./LinkInput.css";

const LinkInput = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {}, []);

  function emptyError(value) {
    if (value == "") {
      setIsEmpty(false);
    } else if (value != "") {
      setIsEmpty(true);
      console.log("re-render");
    }
  }

  return (
    <div className="linkInput-wrapper">
      <div className="linkInput-container">
        <div className={!isEmpty ? "link-content-red" : "link-content"}>
          <div className="link-content-input">
            <input
              type="url"
              onChange={(e) => emptyError(e.target.value)}
              placeholder="Shorten a link here..."
            />
            {!isEmpty ? <p className="add-link">Please add a link!</p> : ""}
          </div>
          <button className="shorten-link-button">Shorten it!</button>
        </div>
      </div>
    </div>
  );
};

export default LinkInput;
