import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function DiscoverSuggestion ({
  className,
  question = "how was apple performed in environmental sector",
  answer = "Apple has made several commitments and taken steps to minimize the environmental impact of its activities, such as carbon neutrality, clean energy, environmental initiatives. for carbon neutrality,Apple is committed to becoming carbon neutral by 2030, and has been carbon neutral for its corporate operations,Apple is designing its products to be made with clean energy, and is using more recycled and renewable materials",
  viewCount = "196",
  shareCount = "40",
  likeCount = "3",
})  {
  return (
    <div className={`discover-suggestion ${className}`}>
      <div className="rectangle-6" />
      <div className="frame-26">
        <p className="how-was-apple">{question}</p>
        <p className="apple-has-made">{answer}</p>
      </div>

      <div className="frame-27">

        <div className="frame-28">
          <img 
           className="img-3" 
           alt="Svg" 
           src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/svg2-4.svg" 
           />
          <div className="element-5">{viewCount}</div>
        </div>

        <div className="frame-29">
          <img
            className="img-3"
            alt="shareCount-img"
            src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/layer-1-15.svg"
          />
          <div className="element-6">{shareCount}</div>
        </div>

        <div className="frame-28">
          <img 
            className="frame-30" 
            alt="likeCount-img" 
            src="https://generation-sessions.s3.amazonaws.com/0b75ace25551fffc6d3a107c49e9db1f/img/frame-8.svg"
          />
          <div className="element-6">{likeCount}</div>
        </div>

      </div>
    </div>
  );
};

export default DiscoverSuggestion;