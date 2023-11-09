import React, { useState } from "react";
import FocusButton from "../FocusButton/FocusButton";
import "./style.css";

function MutiLineInputText({ className }) {
  const [showSideBox, setShowSideBox] = useState(false);

  function toggleSideBox() {
    setShowSideBox(!showSideBox);
  }

  return (
    <div className={`muti-line-input-text ${className}`}>
      <textarea className="ask-ESG-related" placeholder="Ask ESG-related questions about S&P 500 companies..." />
      <FocusButton onClick={toggleSideBox} className="focus-button-instance" />
      <img className="frame-9" alt="submit-button" src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/frame-9.svg" />
      {showSideBox && <SideBox />}
    </div>
  );
}

function SideBox() {
  return (
    <div className="sidebox-container">
      <Option 
        name="Company"
        logo="https://c.animaapp.com/HKqGftud/img/svg8-3.svg" 
        description="Inquire about a specific company"
      />
      <Option 
        name="General"
        logo="https://c.animaapp.com/HKqGftud/img/frame-15.svg" 
        description="Inquire about everything else"
      />
    </div>
  );
}

function Option({ name, logo, description }) {
  return (
    <div className="option-container">
      <img className="option-logo" src={logo} alt={`${name} Logo`} />
      <div className="option-content">
        <h3 className="option-name">{name}</h3>
        <p className="option-description">{description}</p>
      </div>
    </div>
  );
}

export default MutiLineInputText;
