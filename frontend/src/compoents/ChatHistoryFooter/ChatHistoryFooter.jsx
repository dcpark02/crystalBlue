
import React from "react";
import "./style.css";

function ChatHistoryFooter({
  className
}) {
  return (
    <div className={`chathistory-footer ${className}`}>
      <div className="rectangle" />
      <div className="frame-5">
        <a href="https://www.apple.com/ca/app-store/" className="frame-6">
          <img className="frame-7" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/048d50d4c8c7b1dcf2c70f234b72e9dd/img/frame-14.svg" />
          <div className="text-wrapper-8">Download</div>
        </a>

        <a href="https://twitter.com/">
        <img
          className="img-2"
          alt="twitter-logo"
          src="https://generation-sessions.s3.amazonaws.com/048d50d4c8c7b1dcf2c70f234b72e9dd/img/layer-1-13.svg"
        />
        </a>
        
        <a href="https://discord.com/">
        <img
          className="img-2"
          alt="Svg"
          src="https://generation-sessions.s3.amazonaws.com/048d50d4c8c7b1dcf2c70f234b72e9dd/img/svg8-2.svg"
        />
        </a>

      </div>
    </div>
  );
};

export default ChatHistoryFooter;