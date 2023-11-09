/**
 * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.
 */
// import dotenv from "dotenv";


// dotenv.config({ path: '../.env' });

// console.log(process.env);

// const tes1 = "log1"
// const tes2 = "22"

// export {tes1, tes2}

// const pineconeIndex= process.env.PINECONE_INDEX_NAME ;
  
// const pineconeNameSpace = process.env.PINECONE_NAME_SPACE ;


// // i dont know why is undefined 
//  export {pineconeNameSpace, pineconeIndex}
//  console.log(pineconeNameSpace, pineconeIndex);

const PINECONE_INDEX_NAME = "test1";
const PINECONE_NAME_SPACE = "pdf"

export {PINECONE_INDEX_NAME, PINECONE_NAME_SPACE}