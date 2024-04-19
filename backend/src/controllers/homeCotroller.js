import CRUDService from "../services/CRUDService";
import db from "../models/index";
import { json } from "body-parser";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("---------------------------");
    console.log(data);
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
let getCRUD = (req, res) => {
  try {
    // let data = await db.User.findAll();
    // console.log("---------------------------");
    // console.log(data);
    return res.render("crud.ejs");
  } catch (e) {
    console.log(e);
  }
};
let postCRUD = async (req, res) => {
  let mess = await CRUDService.createNewUser(req.body);
  console.log(mess);
  return res.send("post crud");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
