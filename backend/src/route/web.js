import express from "express";
import homeCotroller from "../controllers/homeCotroller";

let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", homeCotroller.getHomePage);
  router.get("/crud", homeCotroller.getCRUD);
  router.post("/post-crud", homeCotroller.postCRUD);
  router.get("/get-crud", homeCotroller.displayGetCRUD);
  return app.use("/", router);
};

module.exports = initWebRouters;
