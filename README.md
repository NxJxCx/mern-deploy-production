# MERN Project
> ### MongoDB - database
> ### Express - API Server
> ### Reactjs - Front-end
> ### Node.js - Web Framework (Back-end)

### Files to Add/Modify/Edit:
** Front-End (client_view)
-`client_view/public/index.html` - You can add/remove/modify tags inside head tag for css or js or any css/js bootstrap
-`client_view/public/**` - You can add or modify `css` and `js` and/or `assets` folders for local resources
-`client_view/src/App.js` - Add or modify `<Route />` tag inside this file for front-end routes
-`client_view/src/App.css` - Modify this file for default App's css styles
-`client_view/src/components/*.js` - Add/Modify/Edit any `*.js` files inside `api/components/` folder for page displays
-`client_view/src/components/*.css` - Add/Modify/Edit any `*.css` files inside `api/components/` folder for reactjs component page styles imports inside `*.js` files

** Back-End (api)
-`api/app.js` - Add lines like `app.use("/myroute", myroute);` where `myroute` is an express router from imported `api/routes` folder
-`api/routes/*.js` - Add/Modify/Edit js files for your desired routers api to add inside `api/app.js`
-`api/model/model.js` - Add/Modify/Edit MongoDB database schemes and models. 
-`api/config.env` - Edit the environment variables inside this file. Example: `MONGO_URI="mongodb://127.0.0.1:27017/test"`
> Modify environment variables inside `api/config.env` to be used as constant variables for all files inside `api` folder. Example inside `config.env`: `API_PORT=4000`
-`api/public/www` - Edit this file if you want to add a secure `https` host api server


To update modules inside `api` and `client_view`,
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
