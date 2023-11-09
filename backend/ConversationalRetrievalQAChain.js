/*
 * the conversationalRetrivalQA chain builds on RetrevalQaAchain to provide a chat history component
   concepets: it first combine the chat history(either explicitly passed in or retreved from the provied memory) and question into a standalone question, then loops up relevant documents from the retriever, and finally passes those documents and the question to a qustion answering chain to return a response 
   the method I used is externally-manged memory and prompt cistomization, link: https://js.langchain.com/docs/modules/chains/index_related_chains/conversational_retrieval

 */
   import { OpenAI } from "langchain/llms/openai";
   import { ConversationalRetrievalQAChain } from "langchain/chains";
  //  import { pinecone } from "./pineconeConfig/pineconeInit.js";
   import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from "./pineconeConfig/pinecone.js";
   import { PineconeStore } from "langchain/vectorstores/pinecone";
   import { BufferMemory } from "langchain/memory";
   import { OpenAIEmbeddings } from "langchain/embeddings/openai";
   import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    PromptTemplate,
    SystemMessagePromptTemplate,
  } from "langchain/prompts";
 


  // const index = pinecone.Index(PINECONE_INDEX_NAME)

  // const vectorStore = await PineconeStore.fromExistingIndex(
  //   new OpenAIEmbeddings(),
  //   { 
  //     pineconeIndex: index,
  //     namespace: PINECONE_NAME_SPACE
  //    }
  // );



  /*** 
   *  prompt customization 
   * One case where you might want to do this is to improve the 
  chain's ability to answer meta questions 
  about the chat history. By default, the only
   input to the QA chain is the standalone question 
   generated from the question generation chain. This poses a 
   challenge when asking meta questions about information in 
   previous interactions from the chat history. 
   For example, if you introduce a friend Bob and mention his age as 28, 
   the chain is unable to provide his age upon asking a question like "How old is Bob?". 
   This limitation occurs because the bot searches for Bob in the vector store, 
   rather than considering the message history.
   */

   

   const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

   Chat History:
   {chat_history}
   Follow Up Input: {question}
   Standalone question:`;

const QA_template = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in markdown:
`
const QA_PROMPT =PromptTemplate.fromTemplate(QA_template )
// console.log(QA_PROMPT);
export const MakeChain =(vectorStore) => { 

  const model = new OpenAI ({
    temperature: 0 ,   // increase the temperature to get more creative answer 
    modelName: 'gpt-3.5-turbo',
  
  });
  
  
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    { 
       qaChainOptions:{
        type: "map_reduce",
        prompt: QA_PROMPT
       },
      // an object that allows me to pass a custom template and llm to the underlying question generation chain 

      questionGeneratorChainOptions: {
        llm: model,
        template:CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT
      },
      
      returnSourceDocuments: true,
    }
  )
   return chain;
};
 


// const chain = MakeChain(vectorStore)
//   let chatHistory = " ";
 
   
//   const q1 = "what is apple 2020 carbon footprint"
//   const q2 = "my friend is called bob, he is 12 years old, he's like to know what is apple 2020 carbon footprint"
//   const q5= " what is the amount of footprint if you divided by 2 "
//   const q3 = "can you provide me a breakdown"
//   const q4 = "how old is bob"



//   //externally-manged memory
//   // If you'd like to format the chat history in a specific way, you can also pass the chat history in explicitly by omitting the memory option and passing in a chat_history string directly into the chain.call method:
//   const responese = await chain.call({question: q2, chat_history: chatHistory})
//   console.log("anwer => ", responese.text);
//   console.log("length of the source => ", responese.sourceDocuments.length);

// responese.sourceDocuments.map( (source,index) => {
//   console.log(" the index => ",index);
//   console.log("page content => " ,source.pageContent);
//   console.log("line from => ", source.metadata['loc.lines.from']);
//   console.log("line to => ", source.metadata['loc.lines.to']);
//   console.log( "page number => ", source.metadata['loc.pageNumber']);
//   console.log("source => ", source.metadata.source );
//   console.log("\n");
 
// })
// chatHistory += q2;
// chatHistory += responese.text
// console.log("chat history=>", chatHistory);

// const followUpRes = await chain.call({
//   question:q3,

//   chat_history: chatHistory,
// }) ;

// console.log("answer=>",followUpRes.text);

// // console.log(followUpRes.sourceDocuments);


// chatHistory += q3;
// chatHistory += followUpRes.text;

// console.log("chat history=>", chatHistory);

// const followUpRes2 = await chain.call({
//   question:q5,

//   chat_history: chatHistory,
// }) ;

// console.log("answer=>",followUpRes2.text);


