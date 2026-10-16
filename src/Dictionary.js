import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //documentation:https://dictionanyapi.dev/

    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}";
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handlekeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="Dictonary">
      <form onsubmit={search}>
        <input type="search" onchange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
