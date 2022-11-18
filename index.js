const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".", ".env") });
const port = process.env.PORT || 3200;
const connection = require("./db");
app.get("/api/system-status", (req, res) => {
  return res.send("Hello i am in System!");
});

//for automateing calling seeds
// app.use(require("./seed.js"));
app.use(express.static("fileStore"));

app.use("/api", require("./routes"));

app.listen(port, () => {
  // connection.query(`SELECT * FROM student.blogs;`, (err, result, field) => {
  //   if (err) console.log(err);
  //   else {
  //     console.log(result);
  //   }
  // });
  console.log(`Server is running on port ${port}`);
});
