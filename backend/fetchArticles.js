import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Define endpoints and corresponding maxId or itemName
const endpoints = [
  { name: 'AP', maxId: process.env.AP_MAXID },
  { name: 'TCA', maxId: process.env.TCA_MAXID },
  { name: 'BBC', maxId: process.env.BBC_MAXID },
  { name: 'MSCI', itemName: process.env.MSCI_ITEMNAME },
];

// Function to fetch and store documents for AP endpoint
async function fetchAndStoreDocsAP() {
  // Get endpoint details from the array
  const endpoint = endpoints[0];

  // Iterate from 1 to maxId for AP endpoint
  for (let id = 1; id <= endpoint.maxId; id++) {
    try {

      // Send GET request to the API for the given endpoint and id
      const response = await axios.get(`http://3.96.171.179:8081/${endpoint.name}/${id}`);
      
      // Define filename for storing the response
      const fileName = `./docs/${endpoint.name}_${id}.json`;
      
      // Write the response data to the file
      fs.writeFileSync(fileName, JSON.stringify(response.data));
      console.log(`Document ${endpoint.name}_${id} has been successfully stored in the ./docs folder`);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.log(`Document ${endpoint.name}_${id} does not exist, skipping...`);
      } else {
        console.error(`Error fetching document ${endpoint.name}_${id}: ${error}`);
      }
    }
  }
}

// Similar functions for TCA and BBC endpoints
async function fetchAndStoreDocsTCA() {
  const endpoint = endpoints[1];
  for (let id = 1; id <= endpoint.maxId; id++) {
    try {
      const response = await axios.get(`http://3.96.171.179:8081/${endpoint.name}/${id}`);
      const fileName = `./docs/${endpoint.name}_${id}.json`;
      fs.writeFileSync(fileName, JSON.stringify(response.data));
      console.log(`Document ${endpoint.name}_${id} has been successfully stored in the ./docs folder`);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.log(`Document ${endpoint.name}_${id} does not exist, skipping...`);
      } else {
        console.error(`Error fetching document ${endpoint.name}_${id}: ${error}`);
      }
    }
  }
}

async function fetchAndStoreDocsBBC() {
  const endpoint = endpoints[2];
  for (let id = 1; id <= endpoint.maxId; id++) {
    try {
      const response = await axios.get(`http://3.96.171.179:8081/${endpoint.name}/${id}`);
      const fileName = `./docs/${endpoint.name}_${id}.json`;
      fs.writeFileSync(fileName, JSON.stringify(response.data));
      console.log(`Document ${endpoint.name}_${id} has been successfully stored in the ./docs folder`);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.log(`Document ${endpoint.name}_${id} does not exist, skipping...`);
      } else {
        console.error(`Error fetching document ${endpoint.name}_${id}: ${error}`);
      }
    }
  }
}

// Function for MSCI endpoint
async function fetchAndStoreDocsMSCI() {
  const endpoint = endpoints[3];
  const id = endpoint.itemName; 
  try {
    const response = await axios.get(`http://3.96.171.179:8081/${endpoint.name}/${id}`);
    const fileName = `./docs/${endpoint.name}_${id}.json`;
    fs.writeFileSync(fileName, JSON.stringify(response.data));
    console.log(`Document ${endpoint.name}_${id} has been successfully stored in the ./docs folder`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.log(`Document ${endpoint.name}_${id} does not exist, skipping...`);
    } else {
      console.error(`Error fetching document ${endpoint.name}_${id}: ${error}`);
    }
  }
}

// Invoke all the functions
fetchAndStoreDocsAP();
fetchAndStoreDocsTCA();
fetchAndStoreDocsBBC();
fetchAndStoreDocsMSCI();
