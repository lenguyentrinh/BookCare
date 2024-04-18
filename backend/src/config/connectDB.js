const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bookingCare", "root", "Trinhltnde160563", {
  host: "localhost",
  dialect: "mysql",
  //   port: '3306',
  // logging: false
});

let connectBD = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectBD;
