const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

router.post("/", (req, res) => {
  createBlog(req, res);
});

router.get("/", (req, res) => {
  getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  getBlog(req, res);
});

router.put("/:id", (req, res) => {
  updateBlog(req, res);
});

router.delete("/:id", (req, res) => {
  deleteBlog(req, res);
});

module.exports = router;
