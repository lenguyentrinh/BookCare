import express from "express";
import homeCotroller from "../controllers/homeCotroller";

let router = express.Router();

let initWebRouters = (app) => {
  router.get("/", homeCotroller.getHomePage);
  router.get("/crud", homeCotroller.getCRUD);
  router.post("/post-crud", homeCotroller.postCRUD);
  router.get("/get-crud", homeCotroller.displayGetCRUD);
  router.get("/edit-crud", homeCotroller.getEditCRUD);
  router.post("/put-crud", homeCotroller.putCRUD);

  return app.use("/", router);
};

module.exports = initWebRouters;
