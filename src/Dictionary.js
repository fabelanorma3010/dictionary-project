import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkey);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
  //documentation:https://dictionanyapi.dev/

  let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}";
    axios.get(apiUrl).then(handleResponse);

    let shecodesapikey=
    "94fo02cft03bfb4003e2fc3ba1382ef9";
    let shecodesApiUrl=
    https://api.shecodes.io/images/v1/search?query={query}&key={key}

  } 

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }


  function handleSubmit(event) {
  (event.PreventDefault();
  search();
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
