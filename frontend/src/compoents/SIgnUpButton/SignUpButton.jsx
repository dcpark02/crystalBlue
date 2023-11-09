import React from "react";
import "./style.css";

function SignUpButton ({ className }){
  return (
    <button className={`sign-up-button ${className}`}>
      <div className="div">Sign Up</div>
    </button>
  );
};
export default SignUpButton;