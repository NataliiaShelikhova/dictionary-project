import React from "react";
import ReactAudioPlayer from 'react-audio-player';


export default function Phonetics(props) {
    function audioPlayer(event) {
        event.preventDefault();
        <ReactAudioPlayer src={props.phonetic.audio} autoplay />
    }
    return (
        <div>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopener">
                <img src="https://cdn-icons-png.flaticon.com/512/59/59284.png" alt="speaker-icon" width={15} className="icon " onClick={audioPlayer}/>

            </a>
          
           {" "} {props.phonetic.text}
        </div>
    )
}