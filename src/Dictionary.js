import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";



export default function Dictionary() {
    let [word, setWord] = useState(null);
    let [result, setResult] = useState(null);
    function handleResponse(response) {
        setResult(response.data[0]);

    }
    function wordChange(event) {
        setWord(event.target.value);
    }
    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={wordChange} />
                </form>
            </section>
            <Result results={result} />

        </div>
    )
}