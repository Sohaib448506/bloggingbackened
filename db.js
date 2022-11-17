const mysql = require("mysql2");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".", ".env") });
const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT1,
  user: process.env.USERNAME1,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
});

module.exports = connection;
