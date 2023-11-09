# crystalBlue AI WebApp

## _Project description_ 
crystalBlue AI WebApp is a sophisticated chatbot application designed to address inquiries related to ESG (Environmental, Social, and Governance) and SDG (Sustainable Development Goals). The platform boasts robust data visualization capabilities, empowering users to monitor ESG progress through interactive timeline charts while providing access to detailed ESG metrics and formulas.

The backend leverages a cutting-edge technology stack, including LangChain, Pinecone, JavaScript, and OpenAI. LangChain facilitates the development of scalable AI/LLM applications and chatbots, while Pinecone serves as a vector store housing text embeddings and various document types. Through a seamless integration of the QA conversation chain and the Pinecone database, the system efficiently retrieves relevant content and delivers accurate responses. On the frontend, we utilize React.js, ECharts, and ReactFlow to create a dynamic and user-friendly interface.

For the frontend, the tech stack includes React.js, ECharts, and ReactFlow.
## _tech stack_
1. Javascript
2. Langchain
3. Pinecone Database
4. OpenAI
5. Reactflow chart
6. Eschart
7. React.js
## _Files in the project_

| File in Backend                           | Description                                                                                                                                                                           |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ingestdata.js                             | Script for 'ingest' and embed the files in docs folder.                                                                                                                              |
| fetchArticles.js                         | Script to fetch and store documents into the docs folder.                                                                                                                            |
| ConversationalRetrievalQAChain.js        | The chains used to look up relevant documents from the Pinecone database and return a response.                                                                                       |
| server.js                                | Backend server running on port 8000, responsible for creating the chain.                                                                                                             |
| pineconeInit.js                          | File used to initialize the Pinecone database client.                                                                                                                               |
| pinecone.js                              | Defines the Pinecone database index name and namespace for vector storage.                                                                                                           |

| File in Frontend(components)            | Description                                                                                                                                                                           |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| App.jsx                                | Main component comprising ChatHistory and either MainPanel component or ScenarioA component.                                                                                           |
| DVcharts                               | Component displaying three distinct charts.                                                                                                                                          |


## _prereq to run the code_
1. prerequeiste:  

   Ensure Node.js with NPM is installed (version >= 18).
  
2. Install the Vite framework for frontend using the command: 
     ```
   npm create vite@latest
     ```
3. Clone the repository or download the ZIP: 
    ```
    git clone [github https url]
    ```
4. Install packages for frontend and backend:

   cd to the frontend folder and then run:
   ```
   npm install
   ```
   cd to the backend folder and then run:
   ```
   npm install
   ```
   After installation, the node_modules folder should be present.

### _Guide to spin up backend server_    
1. Configure the .env file and the namespace in the backend.
   ```
   ORGANIZATION="" 
   OPENAI_API_KEY=""

   PINECONE_API_KEY=""
   PINECONE_ENVIRONMENT=""

   AP_MAXID =36 
   TCA_MAXID = 324 
   BBC_MAXID = 768 
   MSCI_ITEMNAME = Apple 
   ```
   * Visit OpenAI to retrieve the API keys and organization.
   * Visit Pinecone to retrieve the API key and environment.
   * Adjust the max ID to fetch the most updated articles from the web scrawler server.
   * In the pineconeConfig folder, go to the pinecone.js file, and replace the index name and namespace.

2. Fetch all articles from the web scrawler API endpoint and store them into the docs folder:
   
     In the backend folder, run:
     ```
     node fetchArticles.js
     ```
     then you should see a folder named "docs" be created and articles in it.
     
3. Ingest the documents stored in the docs folder into the Pinecone database (if not done previously):** 

    Run the command in the terminal or use a node to run the JS file. 
    ```
    npm run ingest 
    ```
    After running the command, check the Pinecone dashboard to verify your namespace and vectors have been added.

4. Run the backend server:

   Once you verified that embeddings and content have been successfully added to the Pinecone, you can run:
   ```
   node server.js
   ```
   This command will spin up the server on port 8000.

### _Guide to run the frontend_

1. Navigate to the frontend folder and run:

   ```
   npm run dev
   ```
  The frontend should be accessible at localhost port 5173. Open the browser to view it.
   
## Further Work to Do
1. Connect the backend to the frontend to achieve a full-stack solution.
2. Dynamically fetch the maximum number of articles from another API instead of hardcoding it in the .env file.
3. Implement a method to fetch only articles not embedded in the Pinecone database and store their embeddings.
4. Enhance the backend chatbot to include footnotes when answering questions based on the Pinecone database.
5. Introduce a community page feature on the frontend.
6. Evaluate and optimize the frontend's loading speed for improved performance.
 
## _Useful links_
* [Lanchain JS docs](https://js.langchain.com/docs/get_started/introduction/)
* [Pinecone database](https://www.pinecone.io/)
* [Vite framework](https://vitejs.dev/)
* [Figma prototpe for the webapp](https://www.figma.com/file/bvwstbD7wntNfOek97Y0xn/honestAI-web-app?mode=dev)

## _Video Demo_
[![Video Thumbnail](https://img.youtube.com/vi/kehC-BoCSyc/0.jpg)](https://youtu.be/kehC-BoCSyc)

[![Video Thumbnail](https://img.youtube.com/vi/7-ayrqhRO8A/0.jpg)](https://youtu.be/7-ayrqhRO8A)

