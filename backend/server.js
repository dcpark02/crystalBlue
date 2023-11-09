
// change from common js to module

import express from 'express';
import bodyParser from 'body-parser';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
// providing a connect/Express midllewarre that can be used to enable CORS 
import cors from "cors"
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { MakeChain } from './ConversationalRetrievalQAChain.js';
import { pinecone } from './pineconeConfig/pineconeInit.js';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from './pineconeConfig/pinecone.js';
dotenv.config();
const app = express()
const port = 8000 ; 

// bodyParser.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code
// app.use(bodyParser.urlencoded({extended:true}))

// bodyParser.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(bodyParser.json());

// Enable All CORS Requests
app.use(cors())

// const configuration = new Configuration({
//     organization: process.env.ORGANIZATION,
//     apiKey: process.env.OPENAI_API_KEY
//   });


// const openai = new OpenAIApi(configuration);


app.post("/chatbot", async function(req,res){
    // const { chats }   = req.body;

    const {question, chatHistory} = req.body;
     console.log(typeof question);
    console.log('question', question);
    console.log("history", chatHistory);


    // const result = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "system",
    //         content: "You are a ESG + SDG analyst, You can help with analyze company ESG + SDG",
    //       },
    //       ...chats,
    //     ],
    //   });


    //openAI recommends replacing newlines with spaces for best results
    const santitizedQuestion = question.trim().replaceAll('\n','');
    try {
      const index = pinecone.Index(PINECONE_INDEX_NAME);
      
      /* create vectorsotre */
      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        {
          pineconeIndex:index,
          namespace: PINECONE_NAME_SPACE,
        },

      );

      // create chain 
      const chain = MakeChain(vectorStore)

      //ask a question using explicit pass in chathistory as string
      const response = await chain.call({
          question: santitizedQuestion,
          chat_history:chatHistory
      });

      console.log(response);
    // send the response as JSON object 
    res.json({
      // output: result.data.choices[0].message,
      response: response,
  })

    } catch (error){
      console.log(error);
    }





})


app.listen(port, function(){
    console.log('the server is running on port 8000');
})