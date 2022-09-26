import React, { useState } from "react";
import "./Dictionary.css";


export default function Dictionary() {
    let [word, setWord] = useState(null);
    function wordChange(event) {
        setWord(event.target.value);
    }
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}`)

    }

    return (
        <div>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={wordChange} />
            </form>

        </div>
    )
}