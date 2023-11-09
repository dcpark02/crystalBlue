
import React from "react";
import "./style.css";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function AnswerSection ({
  className,
  answerContent = `Apple has performed well in environmental sustainability, according to the available search results. Here are 
  some of the ways Apple has performed in environmental sustainability: 
  Apple has committed to becoming carbon neutral by 2030 and has made efforts to reduce carbon emissions from
  manufacturing and the use of its devices without compromising performance
  Apple has made strides in using more recycled and renewable materials in its products, with 20% of all
  materials shipped in products last year coming from recycled sources 
  Apple has set goals to design carbon impact out of its devices and to use less energy over the course of its
  products's lives 
  Apple has made efforts to monitor and check the carbon emissions of its major manufacturing partners and has
  been carbon neutral since 2020 
  Apple has released several environmental progress reports that detail its goals and progress in areas such as
  climate change, energy efficiency, and low-carbon design
  Overall, Apple's commitment to sustainability and environmental responsibility has helped the company
  reduce its carbon footprint and promote sustainability in its operations and products`
}) {
  return (
    <div className={`anser-section ${className}`}>
      
      <div className="answer-tag">
        <img
          className="answer-icon"
          alt="Answer icon"
          src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/answer-icon-2.svg"
        />
        <div className="text-wrapper-17">Answer</div>
      </div>

      <div className="answer markdown-container"> 
       <ReactMarkdown>{answerContent}</ReactMarkdown>  
      </div>
      <img className="layer-3" alt="Layer" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/layer-1-5.svg" />
      <img className="frame-15" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/f51c6dcb620342ce8dd8838b14ead583/img/frame-25.svg" />
      <div className="rectangle-3" />
    </div>
  );
};


export default AnswerSection;

