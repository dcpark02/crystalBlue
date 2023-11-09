import React from "react";
import "./style.css";

function FollowUpInputText({ className, width }) {
    return (
        <div style={width} className={`follow-up-input-text ${className}`}>  
            <form className="follow-up-form">
                <input 
                    className="follow-up-input" 
                    type="text" 
                    placeholder="Ask follow-up..."
                />
                <button className="submit-button" type="submit">
                    <img 
                        className="submit-icon" 
                        alt="Submit" 
                        src="https://c.animaapp.com/MVudWptW/img/frame.svg" 
                    />
                </button>
            </form>
        </div>
    );
};

export default FollowUpInputText;
