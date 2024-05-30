const createBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    let res = await response.json();
    throw res.message || res;
  }

  const responseData = await response.json();
  return responseData;
};

const fetchBlogs = async () => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    return error;
  }
};

const fetchBlogById = async (id) => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const fetchBlogsByCategoryId = async (categoryId) => {
  try {
    const data = await fetch(
      "http://localhost:8000/api/blogs/categories/" + categoryId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const fetchBlogsByAuthorId = async (authorId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/author/" + authorId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

const updateBlog = async (id) => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const deleteBlogsById = async (id) => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const blogService = {
  createBlog,
  fetchBlogs,
  fetchBlogById,
  fetchBlogsByCategoryId,
  fetchBlogsByAuthorId,
  updateBlog,
  deleteBlogsById,
};

export default blogService;
