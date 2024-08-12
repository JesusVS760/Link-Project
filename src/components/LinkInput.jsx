import React, { useEffect, useState } from "react";
import "./LinkInput.css";

const LinkInput = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const ACCESS_TOKEN = "1b2b8af2aa18dc4cb9c69dbafc440cda2f95b470";

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
  // KEY NOTES FOR NEXT TIME USE:
  // Wrap in try catch block just because we may not able to fetch properly
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`, // creds from server to client
            "Content-Type": "application/json", // media type
          },
          body: JSON.stringify({
            // type
            long_url: longURL,
            domain: "bit.ly",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // conversion to object aka useable data
        console.log(data.link); // property of data, aka dot notation to refer to actual link
        setShortURL(data.link);
      } catch (e) {
        console.log("caught", e);
      }
    };

    fetchUrl();
  }, [longURL]);

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
          <button
            onClick={() => {
              setIsClicked(true);
            }}
            className="shorten-link-button"
          >
            Shorten it!
          </button>
          {/*TESTING <a href={shortURL}>{shortURL}</a> */}
        </div>
      </div>
      {shortURL && isClicked && (
        <div className="result-content">
          <div className="original-link">{longURL}</div>
          <div className="shortened-link">
            <div className="short-url-link">
              <a href={shortURL}> {shortURL}</a>
            </div>
            <div className="copy-button">
              <button>Copy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkInput;
