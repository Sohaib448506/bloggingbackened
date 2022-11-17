const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  getAllblogs,
  singleBlog,
  publishBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/blogs");

router.get("/blogs", getAllblogs);
router.get("/single/blog", singleBlog);
router.post("/publish", upload.single("thumbImage"), publishBlog);
router.put("/update", upload.single("thumbImage"), updateBlog);
router.delete("/delete/blog", deleteBlog);

module.exports = router;
