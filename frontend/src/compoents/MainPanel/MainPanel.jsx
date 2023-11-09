import React from "react";
import BigHeaderHomePage from "../HeaderHomePage /HeaderHomePage";
import DiscoverSection from "../DiscoverSection/DiscoverSection";
import ESGProfile from "../EsgCompanyProfile/ESGProfile";

import MutiLineInputText from "../MutiLineInputText/MutiLineInputText";
import TryAskingSection from "../TryAskingSection/TryAskingSection";
import "./style.css";

function MainPanel({ className, footerClassName })  {
    





  return (
    <div className={`main-panel ${className}`}>
      <BigHeaderHomePage className="big-header-home-page-instance" />
      <MutiLineInputText
        className="muti-line-input-text-area"
        focusButtonVector="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/vector-5.svg"
        frame="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/frame-22.svg"
      />
      <TryAskingSection className="try-asking-section-instance" />
      <div className="frame-32">
      <div className="esg-profiles-header">
        <img
          className="frame-33"
          alt="Frame"
          src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/frame-23.svg"
        />
        <div className="text-wrapper-34">Popular ESG Profiles</div>
      </div>
      <ESGProfile 
        className="esg-profile1"  
        companyLogo = "https://cdn1.iconfinder.com/data/icons/logotypes/32/apple-256.png"
        companyName = "Apple Inc. (AAPL)"
        totalScore = "75.0"
        totalScoreChange ="-2.0(-0.15%)"
        TotalScoreChangeChart ="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/-----2023-08-08-132315-1-4@2x.png"
        TotalScoreColor = {{color:"red"}}
        eScore = "73.0"
        eScoreChange = "-2.0(-0.15%)"
        eScoreColor = {{color:"red"}}
        sScore = "80.0"
        sScoreChange = "-4.5(-0.32%)"
        sScoreColor = {{color:"red"}}
        gScore = "77.0"
        gScoreChange = "+1.5(+0.23%)"
        gScoreColor = {{color: "green"}}
        updateTime = "Aug 11, 2023 at 4:23 p.m. EDT"/>
       
       <ESGProfile 
        className="esg-profile2"  
        companyLogo = "https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/2-2-2@2x.png"
        companyName = "Shell PLC (SHEL)"
        totalScore = "62.8"
        totalScoreChange =" +0.2(+0.39%"
        TotalScoreChangeChart ="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/-----2023-08-08-132315-1-5@2x.png"
        TotalScoreColor = {{color:"green"}}
        eScore = "55.0"
        eScoreChange = "+1.5(+0.05%)"
        eScoreColor = {{color:"green"}}
        sScore = "62.4"
        sScoreChange = "-5.2(-2.32%)"
        sScoreColor = {{color:"red"}}
        gScore = "71.0"
        gScoreChange = "+0.3(+0.17%)"
        gScoreColor = {{color: "green"}}
        updateTime = "Aug 14, 2023 at 5:00 p.m. EDT"
        />
       </div>
      {/* <ESGProfile2 className="esg-profile2" /> */}
      <DiscoverSection className="discover-section-in-home-page" />
      <div className={`footer ${footerClassName}`}>
        <div className="text-wrapper-35">About</div>
        <div className="text-wrapper-36">Blog</div>
        <div className="text-wrapper-36">Privacy Policy</div>
        <div className="text-wrapper-36">Terms of Service</div>
      </div>
    </div>
  );
};

export default MainPanel;