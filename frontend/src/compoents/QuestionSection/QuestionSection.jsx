
import React from "react";
import "./style.css";

 function QuestionSection ({ 
    className,
    question = "How was apple performed in environmental",
 }) {
  return (

      <p className={`question ${className}`}> {question}</p>
    
  );
};

export default QuestionSection;
