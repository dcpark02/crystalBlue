import React from "react";
import "./style.css";

function ChatPanelButton({
  buttonImg,
  buttonName,
  className
}){
  return (
    <button className={`chat-panel-button ${className}`}>
      <img
        className="button-img"
        alt="button-image"
        src={buttonImg}
      />
      <div className="text-wrapper-5">{buttonName}</div>
    </button>
  );
};

export default ChatPanelButton;
