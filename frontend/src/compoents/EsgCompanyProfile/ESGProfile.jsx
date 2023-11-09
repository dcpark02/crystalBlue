import React from "react";
import "./style.css";

function ESGProfile ({ 
  className,
  companyLogo = "https://cdn1.iconfinder.com/data/icons/logotypes/32/apple-256.png",
  companyName = "Apple Inc. (AAPL)",

  totalScore = "75.0",
  totalScoreChange ="-2.0(-0.15%)",
  TotalScoreChangeChart ="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/-----2023-08-08-132315-1-4@2x.png",
  TotalScoreColor = {color:"red"},

  eScore = "73.0",
  eScoreChange = "-2.0(-0.15%)",
  eScoreColor = {color:"red"},

  sScore = "80.0",
  sScoreChange = "-4.5(-0.32%)",
  sScoreColor = {color:"red"},

  gScore = "77.0",
  gScoreChange = "+1.5(+0.23%)",
  gScoreColor = {color: "green"},
  
  updateTime = "Aug 11, 2023 at 4:23 p.m. EDT"
}) {
  return (
    <div className={`esg ${className}`}>
      <img
        className="company-logo"
        alt="company-logo"
        src={companyLogo}
      />
      <div className="company-name">{companyName}</div>
      <div className="overlap-group-2">
        <div className="frame-12">
          <div className="frame-13">
            <div className="text-wrapper-15">crystalBlue Rating</div>
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-16">{totalScore}</div>
                <div style={TotalScoreColor} className="text-wrapper-17">{totalScoreChange}</div>
              </div>
              <img
                className="element-2"
                alt="total-score-change-chart"
                src={TotalScoreChangeChart}
              />
            </div>
          </div>
          <div className="frame-16">
            <div className="text-wrapper-15">Environment</div>
            <div className="frame-17">
              <div className="text-wrapper-18">{eScore}</div>
              <div style={eScoreColor} className="text-wrapper-19">{eScoreChange}</div>
            </div>
          </div>
          <div className="frame-16">
            <div className="text-wrapper-15">Social</div>
            <div className="frame-17">
              <div className="text-wrapper-18">{sScore}</div>
              <div style={sScoreColor} className="text-wrapper-19">{sScoreChange}</div>
            </div>
          </div>
          <div className="frame-16">
            <div className="text-wrapper-15">Governance</div>
            <div className="frame-18">
              <div className="text-wrapper-20">{gScore}</div>
              <div style={gScoreColor} className="text-wrapper-21">{gScoreChange}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
      </div>
      <p className="text-wrapper-22">{updateTime}</p>
    </div>
  );
};

export default ESGProfile