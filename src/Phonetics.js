import React from "react";


export default function Phonetics(props) {
    return (
        <div>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopener">
                Listen {" "}

            </a>
          
            {props.phonetic.text}
        </div>
    )
}