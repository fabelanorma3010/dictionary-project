import React, { useState } from "react";
import axios from "axios";
import Results from " ./Results";
import Photos from " ./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation:https://dictionanyapi.dev/

    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}";
    axios.get(apiUrl).then(handleResponse);

    let shecodesapikey = "94fo02cft03bfb4003e2fc3ba1382ef9";
    let shecodesApiUrl =
      "https://api.shecodes.io/images/v1/search?query={boks}&key={key}";
    axios.get(apiUrl).then(displayphotos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictonary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onsubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultkeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
