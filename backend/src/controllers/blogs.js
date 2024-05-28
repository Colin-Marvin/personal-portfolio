const createBlog = (req, res) => {
  res.status(200).json({ message: "Create new blog!", data: [] });
};

const getBlogs = (req, res) => {
  res.status(200).json({ message: "Return all blogs!", data: [] });
};

const getBlog = (req, res) => {
  res.status(200).json({ message: "Return blog by ID!", data: [] });
};

const updateBlog = (req, res) => {
  res.status(200).json({ message: "Update blog by ID!", data: [] });
};

const deleteBlog = (req, res) => {
  res.status(200).json({ message: "Delete blog by ID!", data: [] });
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
