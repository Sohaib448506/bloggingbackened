const connection = require("../../db");

const getAllblogs = (req, res) => {
  connection.query(
    `SELECT * , CONVERT(mainBlog USING utf8) AS mainBlog FROM blogs`,
    (err, result, field) => {
      if (err) return res.status(400).send(err);
      else {
        return res.status(201).send({ success: true, response: result });
      }
    }
  );
};

const singleBlog = (req, res) => {
  const id = req.query?.id;
  if (!id) {
    return res.status(500).send("Blog Id is required");
  }
  connection.query(
    `SELECT *, CONVERT(mainBlog USING utf8) AS mainBlog FROM blogs where id=${id} ;`,
    (err, result, field) => {
      if (err) return res.status(400).send(err);
      else {
        return res.status(201).send({ success: true, response: result });
      }
    }
  );
};

const publishBlog = (req, res) => {
  console.log(req.file);
  const data = req.body;
  const imageUrl = req?.file?.path;
  const category = data?.category;
  const title = data?.title;
  const textDisplay = data?.textDisplay;
  const mainBlog = data?.mainBlog;
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
  const imageUrl = req?.file?.path;
  const category = data?.category;
  const title = data?.title;
  const textDisplay = data?.textDisplay;
  const mainBlog = data?.mainBlog;
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

function uploadFiles(req, res) {
  res
    .status(201)
    .send({ message: "Successfully uploaded files", data: req.files });
}

module.exports = {
  getAllblogs,
  singleBlog,
  publishBlog,
  updateBlog,
  deleteBlog,
  uploadFiles,
};
