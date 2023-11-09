
import { useState,useRef, useEffect } from 'react'
import React from "react"
import styles from "./ChatBot.module.css"
import SendIcon from '@mui/icons-material/Send';
import { Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';
import ReactMarkdown from "react-markdown";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


function ChatBot(){
 // store user's typed in message 

  const [message, setMessage] = useState("");
  // store the history of chat 
  const [chats, setChats] = useState([]);
  const [chatHistory, setChatHistory] = useState("")

  // the isTyping variable will notify the user whether the bot is typing  or not 
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

// get called whenever the chat message change, ensure that the chat container is scrooled to the bottom
useEffect(() => {
  scrollToBottom();
}, [chats]);



  function handleMessage(newMessage) {
    setMessage(newMessage)
  }


  const handleChat = async function(e,message){
    e.preventDefault();

    if(!message)  {
      alert("please input a question");
      return;
    }

    const question = message.trim();

    setIsTyping(true);

    // let msgs = [...chats] ; 
    // msgs.push({
    //     role:"user", 
    //     content: message,
    // });
    // set the chats equal to new mesage history array 
    // setChats(msgs);
    setChats((prevChats) => {
      return [
        ...prevChats,
        {
          role: "user",
          content: message,
        },
      ];
    });
      console.log(chats);
    setMessage("");

    try{
    const response = await fetch("http://localhost:8000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //// body data type must match "Content-Type" header
      body: JSON.stringify({
        question,    ////
        chatHistory,    /// **************need to resolve 
      }),
    });

    const data = await response.json();
    console.log(data.response);
       
      // .then((response) => response.json()
      // )
      // .then((data) => {
      //   console.log(data);
      //   // data.response 


      //   msgs.push(data.output);
      //   setChats(msgs);
      //   setIsTyping(false);
      //   scrollToBottom(); // Scroll to bottom after updating chat messages
        
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

    setChats( (prevChats) => {
      return [
        ...prevChats,
        {
          role: "bot",
          content: data.response.text,
          sourceDocs: data.response.sourceDocuments,
        },
      ]
    });
    console.log(chats);
    setChatHistory( (prevChat) => {
      return prevChat ? prevChat  + "\n" + message + "\n" + data.response.text 
                      : message  +   "\n" + data.response.text;
    } )
    console.log(chatHistory);
    setIsTyping(false)
    scrollToBottom();
  } catch (error){
    console.log(error);
  }
  };
 
  // whenver the chat messages change, ensure the chat container is scrolled to the bottom 
  function scrollToBottom() {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
   
  

  return (
       <main>
      <h1>ESG + SDG Analysis</h1>

       {/* use the useRef hook to reference the chat container element for scrolling purpose */}
      <section ref={chatContainerRef} className={styles.chatContainer}>
      {chats.length === 0 ? (
        <div className={styles.prompt}>
        <div className={styles.cardContainer}>
        <Card className={styles.card}>
              <CardContent>
                <Typography variant="h7"><b>General</b></Typography>
                <Typography variant="body2" className={styles.subquestion}>
                   "What has <b>Riot Games</b> done to remedy gender discrimination
                    after their lawsuit settlement?"
                </Typography>
                <Typography variant="body2" className={styles.subquestion}>
                   "Has any of <b>Lockheed Martin</b>'s arms sales been misused to hurt
                    civilians in Ukraine?"
                </Typography>
                <Typography variant="body2" className={styles.subquestion}>
                   "What are <b>Nestle</b>'s latest environmental violations and
                    damages in dollar figures?"
                </Typography>
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardContent>
                <Typography variant="h7"><b>About Ratings</b></Typography>
                <Typography variant="body2" className={styles.subquestion}>
                   "Explain how <b>Monsanto</b>'s Environmental rating dropped since the pandemic ended."
                </Typography>
                <Typography variant="body2" className={styles.subquestion}>
                   "Provide a granular historical overview of why <b>Dupont</b>'s Environmental rating has always been low."
                </Typography>
                <Typography variant="body2" className={styles.subquestion}>
                   "How has <b>Johnson & Johnson</b>'s asbestos scandals affected The Honest AI's ratings?"
                </Typography>
              </CardContent>
            </Card>

            </div>
            
          </div>
        )  : (
          chats.map((chat, index) => (
            <div
              key={`chatMessage-${index}`}
              className={`${styles.message} ${
                chat.role === 'user' ? styles.userMsg : styles.botMsg
              }`}
            >
              <ReactMarkdown linkTarget="_blank">{chat.content}</ReactMarkdown>
          
              {console.log("is source document:",chat.sourceDocs)}
              {(chat.sourceDocs &&  chat.sourceDocs.length > 0) && (
                <div key= {`sourceDocsAccordion-${index}`} >
                  {/* {chat.sourceDocs.map( (doc, docindex) => {
                   return <ReactMarkdown key={docindex} linkTarget="_blank">{doc.pageContent} </ReactMarkdown>
                  })} */}
                <Accordion allowMultipleExpanded  allowZeroExpanded>
                {chat.sourceDocs.map( (doc, docIndex) => {
                  return (<div key={`messageSourceDocs-${docIndex}`}>
                   <AccordionItem key={`item-${docIndex}`}>
                   <AccordionItemHeading>
                    <AccordionItemButton>
                    Source {docIndex +1}
                    </AccordionItemButton>
                   </AccordionItemHeading>

                   <AccordionItemPanel>
                   <ReactMarkdown linkTarget="_blank">
                    {doc.pageContent}   
                   </ReactMarkdown>
                   <p  className="mt-2"> 
                   {/* <a key={`sourceIndex-${docIndex}`} href={doc.metadata.source} target="_blank" rel="noopener noreferrer">Source {docIndex + 1}</a> */}
                     <b>Source:</b> {doc.metadata.source}\

                    {/* {doc.metadata['loc.lines.from'] && <b>Line From:</b> {doc.metadata['loc.lines.from']}} */}
                   </p>


                   </AccordionItemPanel>


                   </AccordionItem>
                  


                  </div>
                  );
                })}


                </Accordion>
            
                
                </div>
              )}
            </div>
          ))
        )}
      </section>


      <div className={isTyping ? "" : styles.hide}>
        {isTyping ? <LinearProgress  color="success" /> : null}
      </div>

      <div className={styles.formContainer}>
      <form action=" " className={styles.form} onSubmit={function (e) {
        handleChat(e, message)
      }}>
        <input type="text"
          name="message"
          value={message}
          placeholder="Type a question and hit Enter..."
          onChange={function (event) {
            handleMessage(event.target.value)
          }} 
          className={styles.input}
          />
          <button type = "submit" className={styles.sendbutton}><SendIcon className={styles.sendicon}/></button>
          
      </form>
      </div>
      </main>
      
  )
}

export default ChatBot;
