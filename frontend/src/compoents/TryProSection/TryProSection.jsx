import React from "react";
import "./style.css";

function TryProSection({ className }) {
  return (
    <div className={`try-pro-section ${className}`}>
      <button className="text-wrapper-6">Try Pro</button>
      <p className="description">More ESG data and analytical tools.</p>
      <button className="text-wrapper-7">Learn More</button>
    </div>
  );
};


export default TryProSection;