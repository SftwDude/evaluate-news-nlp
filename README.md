# Article Sediment  

This project contains front-end software and a backend server. The front-end displays the sediment of an article. The backend serves the front-end website and gets the sediment of an article using a Natural Language Processing API. 

## Backend Server

Backend Server uses Node's Express module to communicate to the front-end and to retrieve an article's sentiment from an API service. 

Use 'npm start' from a CLI to start the server. The server will be listening on port 8081.

Use the route http://localhost:8081/sediment to retrieve the sediment of an article. Pass the url of the website that contains the article to be analyzed. 
- For example: http://localhost:8081/sediment?url=http://usatoday.com

The backend server uses a ServiceWorker to cache the website article locally using ServiceWorker. This will allow the article to be analyzed offline.

## Front-end Website

The front-end website allows a website address of an article to be entered and submitted to the backend. The backend retrieves the results of the article's NLP and returns it to the Front-end.

To build and launch the website for developement run 'npm run build-dev' from a CLI. To create the production website run 'npm run build-prod' from a CLI.
