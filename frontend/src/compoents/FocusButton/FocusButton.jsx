import React from "react";
import "./style.css";

function FocusButton({ className, onClick }) {
  return (
    <div className={`focus-button ${className}`} onClick={onClick}>
      <img className="vector" alt="Vector" src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/vector-4.svg" />
      <div className="text-wrapper-10">Focus</div>
    </div>
  );
}

export default FocusButton;
