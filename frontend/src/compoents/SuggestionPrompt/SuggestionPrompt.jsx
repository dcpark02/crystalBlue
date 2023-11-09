import React from "react";
import "./style.css";

function SuggestionPrompt({ 
    className,
    suggestionPrompt1,
    suggestionPrompt2,
    suggestionPrompt3,

 }) {
    return (
        <div className={`suggestion-prompt ${className}`}>
            <img className="suggestion-img" alt="suggstion-prompt-icon" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-16.svg" />
            <div className="suggestion-prompt-title">Related</div>

            <div className="prompt-container">
                <p className="prompt-1">
                    {suggestionPrompt1}
                </p>
                <img className="frame-24" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-54.svg" />
                <div className="divison-line-1" />
            </div>

            <div className="prompt-container">
                <p className="prompt-2">
                    {suggestionPrompt2}
                </p>
                <img className="frame-25" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-54.svg" />
                <div className="division-line-2" />
            </div>

            <div className="prompt-container">
                <p className="prompt-3">{suggestionPrompt3}</p>
                <img className="frame-26" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-54.svg" />
            </div>
        </div>
    );
};

export default SuggestionPrompt;
