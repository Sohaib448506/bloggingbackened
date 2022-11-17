const connection = require("./db");
const seed = () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
    var sql = `CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
		imageUrl VARCHAR(500) not null,
		category VARCHAR(500) not null,
        title  VARCHAR(1000) not null,
        textDisplay VARCHAR(7000) not null,
        mainBlog LONGBLOB
    )`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table Created", result);
    });
  });
};

seed();

module.exports = seed;
