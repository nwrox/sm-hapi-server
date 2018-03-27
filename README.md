# sm-hapi-server

Simple node api with hapi.js.

### Starting

Start the api @ port 8000 from command line: ```npm run start```.

### Dependencies

The package.json has some, install at least babel-preset-env (```npm i -D babel-preset-env```), other dependencies are not necessary as the script is being executed with ```npx```.

### Routes

After starting the server, you'll have the following routes:

#### GET
```/hello``` - Simple hello gif  
```/getSubmit``` - Submit a GET request and receive a dummy message or json.  

#### POST
```/postSubmit``` - Submit a POST request and receive a dummy message or json.  
