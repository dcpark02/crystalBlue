/*
 * the conversationalRetrivalQA chain builds on RetrevalQaAchain to provide a chat history component
   concepets: it first combine the chat history(either explicitly passed in or retreved from the provied memory) and question into a standalone question, then loops up relevant documents from the retriever, and finally passes those documents and the question to a qustion answering chain to return a response 
   the method I used is externally-manged memory and prompt cistomization, link: https://js.langchain.com/docs/modules/chains/index_related_chains/conversational_retrieval

 */
   import { OpenAI } from "langchain/llms/openai";
   import { ConversationalRetrievalQAChain } from "langchain/chains";
  //  import { pinecone } from "../pineconeConfig/pineconeInit.js";
  import { PineconeClient } from "@pinecone-database/pinecone";
   import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from "../pineconeConfig/pinecone.js";
   import { PineconeStore } from "langchain/vectorstores/pinecone";
   import { BufferMemory } from "langchain/memory";
   import { OpenAIEmbeddings } from "langchain/embeddings/openai";
   import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    PromptTemplate,
    SystemMessagePromptTemplate,
  } from "langchain/prompts";
  import dotenv from "dotenv"
  import { MakeChain } from "../ConversationalRetrievalQAChain.js";

// consider the location of the script running(in this case, ingestdata.js)
dotenv.config({ path: '../.env' }); // Updated path
 
   

       const client = new PineconeClient();
      await client.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });
  const pineconeIndex = client.Index(PINECONE_INDEX_NAME);

  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { 
      pineconeIndex: pineconeIndex,
      namespace: PINECONE_NAME_SPACE
     }
  );

  const chain = MakeChain(vectorStore)
  let chatHistory = " ";
 
   
  const q1 = "what is apple 2020 carbon footprint"
  const q2 = "my friend is called bob, he is 12 years old, he's like to know what is apple 2020 carbon footprint"
  const q5= " what is the amount of footprint if you divided by 2 "
  const q3 = "can you provide me a breakdown"
  const q4 = "how old is bob"



  //externally-manged memory
  // If you'd like to format the chat history in a specific way, you can also pass the chat history in explicitly by omitting the memory option and passing in a chat_history string directly into the chain.call method:
  const responese = await chain.call({question: " is McIlroy birdies last 2 holes to win Scottish Open?", chat_history: chatHistory})
  
  console.log("ANSWER => ", responese.text);
  console.log("LENGTH OF SOURCE => ", responese.sourceDocuments.length);

responese.sourceDocuments.map( (source,index) => {
  console.log(" INDEX => ",index);
  console.log("source", source.pageContent);
  console.log("metadata", source.metadata);
  // console.log("PAGE CONTENT => " ,source.pageContent);
  // console.log("LINE FROM => ", source.metadata['loc.lines.from']);
  // console.log("LINE TO => ", source.metadata['loc.lines.to']);
  // console.log("PAGE NUMBER => ", source.metadata['loc.pageNumber']);
  // console.log("SOURCE => ", source.metadata.source );
  console.log("\n");
 
})
 chatHistory += q1;
 chatHistory += responese.text
// console.log("chat history=>", chatHistory);

// console.log("===========================");

// const followUpRes = await chain.call({
//   question:q3,

//   chat_history: chatHistory,
// }) ;

// console.log("answer=>",followUpRes.text);



// followUpRes.sourceDocuments.map( (source,index) => {
// console.log(" INDEX => ",index);
// console.log("PAGE CONTENT => " ,source.pageContent);
// console.log("LINE FROM => ", source.metadata['loc.lines.from']);
// console.log("LINE TO => ", source.metadata['loc.lines.to']);
// console.log("PAGE NUMBER => ", source.metadata['loc.pageNumber']);
// console.log("SOURCE => ", source.metadata.source );
// console.log("\n");})



// // console.log(followUpRes.sourceDocuments);


// chatHistory += q3;
// chatHistory += followUpRes.text;

// console.log("chat history=>", chatHistory);

// console.log("==================");

// const followUpRes2 = await chain.call({
//   question:q4,

//   chat_history: chatHistory,
// }) ;

// console.log("answer=>",followUpRes2.text);


