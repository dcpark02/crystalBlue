import dotenv from "dotenv"

// consider the location of the script running(in this case, ingestdata.js)
dotenv.config({ path: './.env' }); // Updated path

import { PineconeClient } from '@pinecone-database/pinecone';
if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
    throw new Error('Pinecone environment or api key vars missing');
  }
  
// const pinecone = new PineconeClient();
// await pinecone.init({
//     environment: process.env.PINECONE_ENVIRONMENT,
//     apiKey: process.env.PINECONE_API_KEY
// });


// export const index = pinecone.Index(PINECONE_INDEX_NAME)

async function initPinecone() {
    try {
      const pinecone = new PineconeClient();
  
      await pinecone.init({
        environment: process.env.PINECONE_ENVIRONMENT ?? '', //this is in the dashboard
        apiKey: process.env.PINECONE_API_KEY ?? '',
      });
  
      return pinecone;
    } catch (error) {
      console.log('error', error);
      throw new Error('Failed to initialize Pinecone Client');
    }
  }
  
  export const pinecone = await initPinecone();