import { PDFLoader } from "langchain/document_loaders/fs/pdf"
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { JSONLoader,JSONLinesLoader, } from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from "./pineconeConfig/pinecone.js"
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { PineconeClient } from "@pinecone-database/pinecone";
import { pinecone } from "./pineconeConfig/pineconeInit.js";
import dotenv from 'dotenv';
// import { index } from './pineconeInit.js';
 dotenv.config();


export const run = async () => {

  // name of the directory to retrieve the file from
const filePath = 'docs'
    
    /* load raw docs from the all files in the directory 
      reason: langauge model(gpt) are ofthen limited by the amount of text that you can pass to them 
    */
        console.log("ingest phase");
        console.log(PINECONE_INDEX_NAME);
     
  const loader = new DirectoryLoader(
    filePath,
      {
        ".json": (path) => new JSONLoader(path, "/texts"),
        // for load the json file 
        ".json": (path) => new JSONLoader(path),
        

        ".jsonl": (path) => new JSONLinesLoader(path, "/html"),
        ".txt": (path) => new TextLoader(path),
        ".csv": (path) => new CSVLoader(path, "text"),
        ".pdf": (path) => new PDFLoader(path)
      }
    );
    const docs = await loader.load();
   // array of raw docs 
    console.log("raw docs", docs);

    // split documents into chunks
  /***
   * option1: The recommended TextSplitter is the RecursiveCharacterTextSplitter. This will split documents recursively by different characters - starting with "\n\n", then "\n", then " ". This is nice because it will try to keep all the semantically relevant content in the same place for as long as possible.
   *  parameter:   
   *  chunksize:   controls the max size (in terms of number of characters) of the final documents.
   *  chunkOverlap: specifies how much overlap there should be between chunks. 
   */

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap:200,
    });

    const splittedOutput = await splitter.splitDocuments(docs);
   
    console.log("split docs:", splittedOutput);


    /* create and store the embeddiing using openai 
      method 1: embedQuery for create embedding for user qeustion
      method 2: embedDoucments for create embedding for documents */
    

    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY, 
    });
    
    const index = pinecone.Index(PINECONE_INDEX_NAME);
  //     const client = new PineconeClient();
  //     await client.init({
  //   apiKey: process.env.PINECONE_API_KEY,
  //   environment: process.env.PINECONE_ENVIRONMENT,
  // });
  // const pineconeIndex = client.Index('test1');
  // const indexesList = await client.listIndexes();
  // console.log(indexesList);
  
    //embed the documents

  await PineconeStore.fromDocuments(splittedOutput,embeddings,{
      pineconeIndex:index,
      namespace:PINECONE_NAME_SPACE

    });
  

    

};


(async () => {
  await run();
  console.log('ingestion complete');
})();






