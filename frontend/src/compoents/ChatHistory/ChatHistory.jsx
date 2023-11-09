import React from "react";
import ChatHistoryFooter from "../ChatHistoryFooter/ChatHistoryFooter";
import ChatPanelButton from "../ChatPanelButton/ChatPanelButton";

import NewThreadButton from "../NewThreadButton/NewThreadButton";
import SignUpButton from "../SIgnUpButton/SignUpButton";
import TryProSection from "../TryProSection /TryProSection";
import "./style.css"
function ChatHistory({ className }) {
  return (
    <div className={`chathistory ${className}`}>
      <img
        className="crystalblue"
        alt="Crystalblue"
        src="https://generation-sessions.s3.amazonaws.com/b09b943601d4e476fc310c8b39aae9cd/img/crystalblue-1--removebg-preview-1-1@2x.png"
      />
      <NewThreadButton className="new-thread-button-instance" />
      <div className="frame-8">
        <ChatPanelButton
          buttonImg="https://generation-sessions.s3.amazonaws.com/4f132d07de2f178cab8f98b183483a80/img/layer-1-12.svg"
          buttonName="Home"
          className="design-component-instance-node"
        />
        <ChatPanelButton
          buttonImg="https://generation-sessions.s3.amazonaws.com/4f132d07de2f178cab8f98b183483a80/img/frame-18.svg"
          buttonName="Community"
          className="design-component-instance-node"
        />
        <ChatPanelButton
          buttonImg="https://generation-sessions.s3.amazonaws.com/4f132d07de2f178cab8f98b183483a80/img/frame-16.svg"
          buttonName="My Threads"
          className="design-component-instance-node"
        />
        <ChatPanelButton
          buttonImg="https://generation-sessions.s3.amazonaws.com/4f132d07de2f178cab8f98b183483a80/img/frame-20.svg"
          buttonName="Login"
          className="design-component-instance-node"
        />
      </div>
      <SignUpButton className="sign-up-button-instance" />
      <TryProSection className="try-pro-section-instance" />
      <ChatHistoryFooter className="chathistory-footer-instance" />
    </div>
  );
}



export default ChatHistory;;
