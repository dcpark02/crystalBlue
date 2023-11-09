import React from 'react';
import ChatBot from "./ChatBot"

import MainPanel from './MainPanel/MainPanel';

import "./App.css";
import ChatHistory from './ChatHistory/ChatHistory';
import DataVisualization from './DataVisualizationSection/DataVisualization';
import ESGButton from './ESGButton/ESGButton';
import SuggestionPrompt from './SuggestionPrompt/SuggestionPrompt';
import QuestionSection from './QuestionSection/QuestionSection';
import AnswerSection from './AnswerSection/AnswerSection';
import ScenarioA from './SnariaoA/SnariaoA';

function App() {
  
  return (
   

    <div  className="app-container">
      <ChatHistory />
      {/* <MainPanel /> */}
      <ScenarioA />
    </div>

    // <div>
    //   <QuestionSection />
    //   <AnswerSection />
    //   <SuggestionPrompt />
    //   <DataVisualization />
    //   <ESGButton />
    // </div>
  );
  
  
   
   


}


export default App;