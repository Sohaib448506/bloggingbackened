const connection = require("../../db");

const getAllblogs = (req, res) => {
  connection.query(`SELECT * FROM blogs`, (err, result, field) => {
    if (err) return res.status(400).send(err);
    else {
      return res.status(201).send({ success: true, response: result });
    }
  });
};

const singleBlog = (req, res) => {
  const id = req.query?.id;
  if (!id) {
    return res.status(500).send("Blog Id is required");
  }
  connection.query(
    `SELECT * FROM blogs where id=${id};`,
    (err, result, field) => {
      if (err) return res.status(400).send(err);
      else {
        return res.status(201).send({ success: true, response: result });
      }
    }
  );
};

const publishBlog = (req, res) => {
  // console.log(req);
  const data = req.body;
  const imageUrl = JSON.stringify(req?.file?.path);
  const category = JSON.stringify(data?.category);
  const title = JSON.stringify(data?.title);
  const textDisplay = JSON.stringify(data?.textDisplay);
  const mainBlog = JSON.stringify(data?.mainBlog);
  if (!imageUrl || !category || !title || !textDisplay || !mainBlog) {
    return res
      .status(500)
      .send(
        "imageURl, category, title, textDisplay and main Blog are required things"
      );
  }
  connection.query(
    `insert into blogs(imageUrl,category,title,textDisplay,mainBlog) values(${imageUrl},${category},${title},${textDisplay},${mainBlog})`,
    (err, result, field) => {
      if (err) return res.status(400).send(err);
      else {
        return res.status(201).send({ success: true, response: result });
      }
    }
  );
};

const updateBlog = (req, res) => {
  console.log(req);
  const data = req.body;
  const id = req.query.id;
  const imageUrl = JSON.stringify(req?.file?.path);
  const category = JSON.stringify(data?.category);
  const title = JSON.stringify(data?.title);
  const textDisplay = JSON.stringify(data?.textDisplay);
  const mainBlog = JSON.stringify(data?.mainBlog);
  if (!imageUrl || !category || !title || !textDisplay || !mainBlog) {
    return res
      .status(500)
      .send(
        "imageURl, category, title, textDisplay and main Blog are required things"
      );
  }

  connection.query(
    `update blogs set imageUrl=${imageUrl}, category=${category}, title=${title}, textDisplay=${textDisplay}, mainBlog=${mainBlog} where id=${id}`,
    (err, result, field) => {
      if (err) return res.status(400).send(err);
      else {
        return res.status(201).send({ success: true, response: result });
      }
    }
  );
};

const deleteBlog = (req, res) => {
  const id = req.query?.id;
  if (!id) {
    return res.status(500).send("Blog Id is required");
  }
  connection.query(
    `DELETE FROM blogs where id=${id};`,
    (err, result, field) => {
      if (err) return res.status(400).send(err);
      else {
        return res.status(201).send({ success: true, response: result });
      }
    }
  );
};

module.exports = {
  getAllblogs,
  singleBlog,
  publishBlog,
  updateBlog,
  deleteBlog,
};
