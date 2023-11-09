import React from "react";
import "./style.css";

function UserProfileBar({
  className,
  userProfilePic = "https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-26.svg",
  userName = "Anonymous"
})  {
  return (
    <div className={`user-profile-bar ${className}`}>
      <div className="rectangle-2" />
      <div className="frame-8">
        <div className="frame-9">
          <img className="frame-10" alt="Frame" src={userProfilePic} />
          <div className="text-wrapper-10">{userName}</div>
        </div>
        <div className="frame-11">
          <img className="img-3" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-27.svg" />
          <div className="text-wrapper-11">Like</div>
        </div>
      </div>
      <div contentEditable="true" className="text-wrapper-12">Untitled</div>
      <div className="frame-12">
        <img className="frame-13" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-28.svg" />
        <img className="img-3" alt="Icon" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/icon-1.svg" />
        <div className="frame-wrapper">
          <div className="frame-14">
            <img className="img-3" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-29.svg" />
            <div className="text-wrapper-13">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserProfileBar; 