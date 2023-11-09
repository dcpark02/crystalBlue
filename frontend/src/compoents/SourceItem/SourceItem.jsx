import React from "react";
import "./style.css";

function SourceItem({
  className,
  artileTitle = "Apple Shares 2023 Environmental Progress Report Ahead of Earth Day MacRumor",
  sourceImg = "https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/favicon-1-1-3@2x.png",
  sourceName = "macrumors",
  sourceIndex = 1,
}) {
  return (
    <div className={`sourceitem ${className}`}>
      <div className="overlap-group">
        <div className="top-content">
          <p className="text-wrapper-18">{artileTitle}</p>
        </div>
        <div className="bottom-content">
          <div className="frame-16">
            <img className="favicon" alt="Favicon" src={sourceImg} />
            <div className="text-wrapper-19">{sourceName}</div>
            <div className="text-wrapper-19">{sourceIndex}</div>
          </div>
          <img
            className="frame-17"
            alt="Frame"
            src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-24.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default SourceItem;
