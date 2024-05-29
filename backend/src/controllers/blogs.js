const Blog = require("../models/Blog");

const createBlogs = async (req, res) => {
  console.log(req.body);

  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    content: req.body.content,
    authorId: req.body.authorId,
    categoryId: req.body.categoryId,
  });

  await blog.save();

  res.status(200).json({
    message: "Blog created!",
    data: [],
  });
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ message: "Return all blogs!", data: blogs });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.status(200).json({ message: "Return blog by ID!", data: blog });
    } else {
      res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getBlogsByCategoryID = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    message: "Get blogs by categoryID!",
    data: [],
  });
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.authorId = req.body.authorId || blog.authorId;
      blog.categoryId = req.body.categoryId || blog.categoryId;
      blog.title = req.body.title || blog.title;
      blog.description = req.body.description || blog.description;
      blog.image = req.body.image || blog.image;
      blog.content = req.body.content || blog.content;
      const updatedBlog = await blog.save();
      res.status(200).json({ message: "Blog updated!", data: updatedBlog });
    } else {
      res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (blog) {
      return res.status(200).json({ message: "Blog deleted!" });
    } else {
      return res.status(404).json({ message: "Blog not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlogs,
  getBlogs,
  getBlogById,
  getBlogsByCategoryID,
  updateBlogByID,
  deleteBlogByID,
};
