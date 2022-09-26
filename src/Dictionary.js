import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";



export default function Dictionary() {
    let [word, setWord] = useState(null);
    function handleResponse(response) {

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
        <div>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={wordChange} />
            </form>

        </div>
    )
}