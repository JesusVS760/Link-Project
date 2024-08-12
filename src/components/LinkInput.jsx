import React, { useEffect, useState } from "react";
import "./LinkInput.css";

const LinkInput = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("default");

  function emptyError(value) {
    if (value == "") {
      setIsEmpty(false);
    } else if (value != "") {
      setIsEmpty(true);
      setLongURL(value);
      console.log(longURL);
      console.log("re-render");
    }
  }
  useEffect(() => {
    const value = longURL;
    const fetchUrl = async () => {
      try {
        const response = await fetch(
          `https://ulvis.net/API/write/get?${value}`
        );
        const data = await response.json();
        setShortURL(data);
      } catch (e) {
        console.log("caught");
      }
      fetchUrl();
      console.log(shortURL);
    };
  }, []);

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
          <p>{shortURL}</p>
        </div>
      </div>
    </div>
  );
};

export default LinkInput;
