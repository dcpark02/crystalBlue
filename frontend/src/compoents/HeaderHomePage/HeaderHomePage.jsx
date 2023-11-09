import React from "react";
import "./style.css";

function BigHeaderHomePage({ className }) {
  return (
    <div className={`header-container ${className}`}>
      <p className="header-text">
        <span className="emphasis-text">Discover the </span>
        <span className="highlighted-text">first</span>
        <span className="emphasis-text"> real-time ESG ratings</span>
      </p>
    </div>
  );
}

export default BigHeaderHomePage;
