const { Sequelize } = require("sequelize");
// require('dotenv').config();

const sequelize = new Sequelize("mahasiswa", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
