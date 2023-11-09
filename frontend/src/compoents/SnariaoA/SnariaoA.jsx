import React from "react";
import AnswerSection from "../AnswerSection/AnswerSection";
import CompanyESGProfile from "../CompanyESGProfile-DataVisual/CompanyESGProfile";
import DataVisualization from "../DataVisualizationSection/DataVisualization";
import ESGButton from "../ESGButton/ESGButton";
import FollowUpInputText from "../FollowUpInputText/FollowUpInputText";
import QuestionSection from "../QuestionSection/QuestionSection";
import SourceSection from "../SourceSection/SourceSection";
import SuggestionPrompt from "../SuggestionPrompt/SuggestionPrompt";
import UserProfileBar from "../UserProfileBar/UserProfileBar";
import "./style.css";

function ScenarioA() {
  return (
    <div className="scenarioA-container">
      
    <div className="user-profile-div">
     <UserProfileBar />
    </div>

    <div className="chat-and-data-container">
      <div className="chatbot-container">
       {/* <p> sdifsfoufsoiusfousfosufiosufosufsoufsofusoifsiofusdfssfsfsfsfsflk</p> */}
       <QuestionSection className="question-section-instance" question="How did Apple's ESG rating change after the cobalt mining scandal ?
"/>
       <AnswerSection answerContent="Apple’s ESG rating declined from very high (9.3/10) to high (8.7/10) after the 2016 cobalt mining scandal. 

CrystalBlue scores the Cobalt Mining Scandal with a 20 year negative impact on Apple’s ESG rating. CrystalBlue’s negative impact score will decline over a 20 year period, assuming that there are no subsequent reports of child exploitation labour. 

Cobalt Mining in the Democratic Republic of Congo (DRC). The DRC is the world's largest producer of cobalt, a metal used in batteries for smartphones and other devices. Reports have emerged about child labor and hazardous conditions in some informal mining operations in the DRC. 
   
In 2016, Amnesty International released a report implicating several technology companies, including Apple, for not conducting due diligence to ensure that the cobalt used in their products wasn't mined using child labor.


"/>
       
      <SourceSection />
      <SuggestionPrompt suggestionPrompt1="What was Apple's ESG rating before the cobalt mining scandal?"
      suggestionPrompt2="What other ESG issues has Apple faced in recent years?"
      suggestionPrompt3="What are some other examples of companies facing ESG controversies?"/>
      {/* <QuestionSection />
      <AnswerSection />
       
      <SourceSection />
      <SuggestionPrompt suggestionPrompt1="How has Apple's use of recycled materials impacted its carbon footprint..."
      suggestionPrompt2="What is the Restore Fund and how does it support Apple's environmental initiatives"
      suggestionPrompt3="How does Apple's Global Recycling Program work"/> */}

      <FollowUpInputText  className="follow-up-input-text-instance" width = {{width: "371px"}}/>
      </div>
      
      <div className="data-visual-container">
        <CompanyESGProfile   className="companyESGProfile-instance"/>
        <DataVisualization className="dataVisualization-instance"/>
        <ESGButton />
      </div>
    </div>

  </div>
);

}

export default ScenarioA;
