import React from "react";
import "./style.css";

function CompanyESGProfile({ className, companyLogo = "https://generation-sessions.s3.amazonaws.com/a7d9770784b15651667fd9d8a5758b95/img/---1-1--1.svg" }) {
  return (
    <div>
      <div className="esg-profile-header">
        <img className="esg-profile-icon" alt="Answer icon" src="https://generation-sessions.s3.amazonaws.com/a7d9770784b15651667fd9d8a5758b95/img/vector-1.svg" />
        <span className="header-name">ESG Profile</span>
      </div>

      <div className={`esg-profile-company ${className}`}>
        <div className="company-info">
          <img className="company-logo" alt="company-logo" src={companyLogo} />
          <span className="company-name">Apple Inc. (AAPL)</span>
          <span className="update-time">Aug 11, 2023 at 4:23 p.m. EDT</span>
        </div>

        <div className="data-section">
          <div className="data-header">
            <span>crystalBlue Rating</span>
            <span>Environment</span>
            <span>Social</span>
            <span>Governance</span>
          </div>
          <div className="data-values">
            <span>
              75.0
              <div className="change-container" style={{ color: "red" }}>
                <span className="data-change">-2.0</span>
                <span className="percentage">(-0.15%)</span>
              </div>
            </span>
            <span>
              73.0
              <div className="change-container" style={{ color: "red" }}>
                <span className="data-change">-1.0</span>
                <span className="percentage">(-0.10%)</span>
              </div>
            </span>
            <span>
              80.0
              <div className="change-container" style={{ color: "red" }}>
                <span className="data-change">-1.5</span>
                <span className="percentage">(-0.12%)</span>
              </div>
            </span>
            <span>
              77.0
              <div className="change-container" style={{ color: "green" }}>
                <span className="data-change">+2.5</span>
                <span className="percentage">(+0.20%)</span>
              </div>
            </span>
          </div>

          <div className="data-ratings">
            <span className="thrid-party-data-rating-title">
              Community<br />Rating
            </span>
            <span className="thrid-party-data-rating-data">
              80.5
              <div className="change-container" style={{ color: "green" }}>
                <span className="data-change">+1.5</span>
                <span className="percentage">(+0.12%)</span>
              </div>
            </span>
            <span className="thrid-party-data-rating-title">
              Legacy Rating<br />(MSCI)
            </span>
            <span className="thrid-party-data-rating-data">
              71.2
              <div className="change-container" style={{ color: "green" }}>
                <span className="data-change">+0.8</span>
                <span className="percentage">(+0.23%)</span>
              </div>
            </span>
          </div>




        </div>
        <div>

        </div>

      </div>
    </div>
  );
}

export default CompanyESGProfile;
