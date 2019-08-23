import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, newQuote] = useState("");
  const [author, newAuthor] = useState("");

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then(res => {
      const tempQuote = res.data.content;
      const tempAuthor = res.data.author;
      newQuote(tempQuote);
      newAuthor(tempAuthor);
    });
  }, []);

  const getNewQuote = async () => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      const tempQuote = res.data.content;
      const tempAuthor = res.data.author;
      newQuote(tempQuote);
      newAuthor(tempAuthor);
    } catch (err) {
      console.log("Oops, looks like there was an error", err);
    }
  };
  return (
    <div id="wrapper">
      <h1 className="title">Random Quote App</h1>

      <div id="quote-box">
        <div id="text">
          <p>{quote}</p>
        </div>
        <div id="author">
          <h5>{author}</h5>
        </div>
        <div id="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}
            rel="noopener noreferrer"
            target="_blank"
            title="Post this quote on twitter!"
          >
            <IconButton>
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
          </a>
          <button id="new-quote" className="buttons" onClick={getNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
