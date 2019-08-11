import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, newQuote] = useState("");
  const [author, newAuthor] = useState("");

  const tweetUrl = "https://twitter.com/intent/tweet";
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then(res => {
      const tempQuote = res.data.content;
      const tempAuthor = res.data.author;
      newQuote(tempQuote);
      newAuthor(tempAuthor);
    });
  }, []);

  const getNewQuote = () => {
    axios.get("https://api.quotable.io/random").then(res => {
      const tempQuote = res.data.content;
      const tempAuthor = res.data.author;
      newQuote(tempQuote);
      newAuthor(tempAuthor);
    });
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
      </div>
    </div>
  );
};

export default App;
