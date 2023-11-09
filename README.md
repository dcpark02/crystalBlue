# CrystalBlue Chatbot WebApp

## _Project description_ 
This is a comprehensive Chatbot Webapp tailored to address questions on ESG (Environmental, Social, and Governance) and SDG (Sustainable Development Goals). It features data visualization capabilities, enabling users to track ESG progress through timeline charts and access detailed ESG metrics and formulas.

For the backend, the tech stack comprises LangChain, Pinecone, JavaScript, and OpenAI. LangChain facilitates the development of scalable AI/LLM applications and chatbots. Pinecone serves as a vector store, housing text embeddings and various documents (e.g., PDF, txt). Utilizing the QA conversation chain paired with the Pinecone database, the system efficiently retrieves relevant content and produces answers.

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

   install the Node.js with NPM, version >= 18
  
2. install the vite framework for frontend  
     ```
   npm create vite@latest
     ```
3. Clone the repo or download the ZIP:  
    ```
    git clone [github https url]
    ```
4. install packages for frontend and backend:  

   cd to the frontend folder and then run:
   ```
   npm install
   ```
   cd to the backend folder and then run:
   ```
   npm install
   ```
   After installation, you should see node_moduels folder
### _Guide to spin up backend server_    
1. Config the .env file and the namespace in backend 
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
   * Vist openai to retrive the API keys and organzation
   * visit pinecone to retrive the API key and environment
   * change the max ID to fetch the most-updated article from the web scrawler server
   * cd to the pineconeConfig folder and go to the pinecone.js file, replace the `index name and name space  

2. Fectch all articles from the web scrawler API endpoint and store into docs folder:
   
    in the backend folder, run:
     ```
     node fetchArticles.js
     ```
     then you should see a folder named "docs" be created and articles in it.
     
3. Ingest the documents stored in the docs folder into pinecone database **if you haven't store the embedding to the databse** 

    run the command in the terminal or using node to run the JS file 
    ```
    npm run ingest 
    ```
    after run the command, check the Pinecone dashboard to verify your namespace and vectors habe been added

4. Run the backend server:

   Once you verified that embeddings and content have been successfully added to the Pinecone, you can run:
   ```
   node server.js
   ```
   to spin up the server on port 8000

### _Guide to run the frontend_

1. cd to the frontend and run:

   ```
   npm run dev
   ```
   the frontend should spin at localhost port 5173, open the broswer to see it:
   
## Further Work to Do
1. Connect the backend to the frontend to achieve a full-stack solution.
2. Fetch the MAX number of articles from another API instead of hardcoding it in the `.env` file.
3. Determine a method to fetch only the articles that haven't been embedded in the Pinecone database, and then store their embeddings into the database.
4. The backend chatbot currently cannot add footnotes when answering questions based on the Pinecone database. Consider overwriting the LangChain framework to incorporate this feature.
5. Introduce a community page feature for the frontend.
6. Assess the frontend's loading speed and optimize it for better performance.
 
## _Useful links_
* [Lanchain JS docs](https://js.langchain.com/docs/get_started/introduction/)
* [Pinecone database](https://www.pinecone.io/)
* [Vite framework](https://vitejs.dev/)
* [Figma prototpe for the webapp](https://www.figma.com/file/bvwstbD7wntNfOek97Y0xn/honestAI-web-app?mode=dev)

## _Video Demo_
[![Video Thumbnail](https://img.youtube.com/vi/kehC-BoCSyc/0.jpg)](https://youtu.be/kehC-BoCSyc)

[![Video Thumbnail](https://img.youtube.com/vi/7-ayrqhRO8A/0.jpg)](https://youtu.be/7-ayrqhRO8A)

