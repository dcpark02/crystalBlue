
import React from "react";
import "./style.css";

function NewThreadButton({ className }) {
  return (
    <button className={`new-thread-button ${className}`}>
      <div className="frame">
        <img
          className="button-img"
          alt="Layer"
          src="https://generation-sessions.s3.amazonaws.com/4f132d07de2f178cab8f98b183483a80/img/layer-1-11.svg"
        />
        <div className="text-wrapper">New Thread</div>
      </div>
    </button>
  );
};

export default NewThreadButton;
