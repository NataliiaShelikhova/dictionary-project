import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from"./Photos";



export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultKeyWord);
    let [result, setResult] = useState(null);
    let [photo, setPhoto] = useState(null);
    let [loaded, setLoaded] = useState(false);
    function handleResponse(response) {
        setResult(response.data[0]);

    }
    function wordChange(event) {
        setWord(event.target.value);
    }
 
    function handlePexelsResponse(response) {
        console.log(response.data.photos);
        setPhoto(response.data.photos);

    }
    function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
    function search() {
        
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
        let pexelsApiKey = "563492ad6f91700001000001a99baa8e245c4c1bb0f23707db0b54a4";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        axios.get(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` }, }).then(handlePexelsResponse);
    }
           function load() {
        setLoaded(true);
        search();
    }
  
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" autoFocus={true} onChange={wordChange} />
                    </form>
                </section>
                <Result results={result} />
                <Photos photos={photo} />
            </div>
        )
    } else {
        load()
        return "load"
    }
}