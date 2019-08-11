import React, { useEffect, useState } from "react";
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
  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
};

export default App;
