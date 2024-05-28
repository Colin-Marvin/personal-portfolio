/* getCategories from the same api endpoint */
const getCategories = async () => {
  try {
    const res = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const categoryAPIdata = await res.json();
    return categoryAPIdata.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const categoriesService = {
  getCategories,
};

export default categoriesService;
