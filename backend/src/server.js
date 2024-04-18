import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRouters from './route/web.js'
import connectBD from "./config/connectDB.js";


require('dotenv').config();
let app = express();
//config app


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRouters(app);
connectBD();


let port = process.env.PORT || 8069;
app.listen(port,()=>{
    console.log("Nodejs is running on the port:"+ port);
})