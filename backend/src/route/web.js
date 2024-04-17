import express from "express";
import homeCotroller from "../controllers/homeCotroller";

let router  = express.Router();

let initWebRouters = (app) =>{

    router.get('/', homeCotroller.getHomePage)




    return app.use("/",router)
}

module.exports = initWebRouters;