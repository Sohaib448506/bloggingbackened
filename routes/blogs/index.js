const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "fileStore/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });
const {
  getAllblogs,
  singleBlog,
  publishBlog,
  updateBlog,
  deleteBlog,
  uploadFiles,
} = require("../../controllers/blogs");

router.get("/blogs", getAllblogs);
router.get("/single/blog", singleBlog);
router.post("/publish", upload.single("thumbImage"), publishBlog);
router.put("/update", upload.single("thumbImage"), updateBlog);
router.delete("/delete/blog", deleteBlog);
router.post("/upload", upload.any("files"), uploadFiles);

module.exports = router;
