# MERN Project
> ### MongoDB
> NoSQL Database Management System
> ### ExpressJS
> Backend Web Application Framework for NodeJS (API Server)
> ### ReactJS 
> JavaScript library for developing UIs based on UI components (Frontend Development Framework)
> ### NodeJS
> JavaScript runtime environment (It enables running Javascript code outside the browser)

### The main purpose of using MERN stack is to develop apps using JavaScript only

### Files to Add/Modify/Edit:
**Front-End (client_view)**
- `client_view/public/index.html` - You can add/remove/modify tags inside head tag for css or js or any css/js bootstrap
- `client_view/public/**` - You can add or modify `css` and `js` and/or `assets` folders for local resources
- `client_view/src/App.js` - Add or modify `<Route />` tag inside this file for front-end routes
- `client_view/src/App.css` - Modify this file for default App's css styles
- `client_view/src/components/*.js` - Add/Modify/Edit any `*.js` files inside `api/components/` folder for page displays
- `client_view/src/components/*.css` - Add/Modify/Edit any `*.css` files inside `api/components/` folder for reactjs component page styles imports inside `*.js` files

**Back-End(API/Database) (api)**
- `api/app.js` - Add lines like `app.use("/myroute", myroute);` where `myroute` is an express router imported from `api/routes` folder
- `api/routes/*.js` - Add/Modify/Edit js files for your desired routers api to import inside `api/app.js`
- `api/model/model.js` - Add/Modify/Edit MongoDB database schemes and models. 
- `api/public/www` - Edit this file if you want to add a secure `https` host api server
- `api/config.env` - Edit the environment variables inside this file. Example: `MONGO_URI="mongodb://127.0.0.1:27017/test"`
> Modifying environment variables inside `api/config.env` are used as constant variables for all files inside `api` folder. They are called using `process.env.CONSTANT_VARIABLE_NAME`. Example:
```
# inside api/config.env
MONGO_URI = "mongodb://127.0.0.1:27017/test"
API_PORT = 4000
```
```
# inside api/app.js
...
connectDB(process.env.MONGO_URI);
...
```
To update any missing node.js modules
inside `api` and `client_view`,
simply enter these commands:
- For the 'api' folder
```
cd api
npm install
```
- For the 'client_view' folder
```
cd client_view
npm install
```

### To Run a Local Server:
- For the front-end (reactjs)
```
cd client_view
npm start
```
- For the API server (express)
```
cd api
npm run dev
```

### To Build Production / Web Deployment on the Internet:
```
cd client_view
npm build
```
