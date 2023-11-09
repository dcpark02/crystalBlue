import React from "react";
import "./style.css";

function TryAskingSection({ className }){
  return (
    <div className={`try-asking-section ${className}`}>
      <div className="try-asking">
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/vector-6.svg"
        />
        <div className="text-wrapper-11">Try asking</div>
      </div>
      <div className="frame-10">
        <div className="text-wrapper-12">Apple’s rating today</div>
        <div className="text-wrapper-12">predict Apple’s ESG</div>
        <p className="text-wrapper-13">why Apple’s rating dip yesterday</p>
      </div>
      <div className="frame-11">
        <div className="text-wrapper-13">explain ESG methodology</div>
        <p className="text-wrapper-13">top 5 ESG improvements in tech</p>
      </div>
    </div>
  );
};

export default TryAskingSection;