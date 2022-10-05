import React from "react";



export default function Phonetics(props) {
   
    return (
        <div>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopener">
                <img src="https://cdn-icons-png.flaticon.com/512/59/59284.png" alt="speaker-icon" width={15} className="icon " />

            </a>
          
           {" "} {props.phonetic.text}
        </div>
    )
}