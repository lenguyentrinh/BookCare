import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        //user already exist
        //compare password
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "roleId", "password"], // exclude
          raw: true,
        });
        console.log(user);
        if (user) {
          let check = bcrypt.compareSync(password, user.password);
          if (check) {
            delete user.password;
            userData.errCode = 0;
            userData.errMessage = "Oke";
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Password err";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User's not found";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage =
          "Your's Email isn't exist in your system. Plz try orther email!";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};
let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { email: userEmail } });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
};
