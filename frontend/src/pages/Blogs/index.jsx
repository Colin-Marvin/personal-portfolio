// Third party
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import DeleteBlogModal from "../../components/DeleteBlogModal";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loading from "../../components/Loading";
import CategoryList from "../../components/CategoryList";

// Styles
import "../../App.css";
import "./index.css";

// State
import {
  setAddBlog,
  fetchBlogsByCategoryId,
  resetSuccessAndError as resetBlog,
} from "../../features/blogSlice";
import {
  fetchCategories,
  resetSuccessAndError as resetCategory,
} from "../../features/categoriesSlice";

export default function BlogsPage() {
  const { categoryId } = useParams();

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const {
    blogs,
    isError: isBlogsError,
    isSuccess: isBlogSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);
  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBlogsByCategoryId(categoryId));
    return () => {
      dispatch(resetBlog());
      dispatch(resetCategory());
    };
  }, [dispatch, categoryId]);

  const onAddBlog = () => {
    dispatch(
      setAddBlog({
        image: "",
        title: "",
        description: "",
        categories: [],
        content: [],
        authorId: user?.id,
      })
    );
  };

  const AddBlog = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="page-subtitle">Blog Posts</p>
        {user && (
          <button
            style={{ margin: "16px" }}
            type="button"
            className="btn btn-outline-secondary"
            onClick={onAddBlog}
          >
            Add Blog Post
          </button>
        )}
      </div>
    );
  };

  if (isLoadingCategories || isLoadingBlogs) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoryList categories={categories} />
        </div>
        <AddBlog />
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
      <AddEditBlogModal />
      <DeleteBlogModal />
      <SuccessToast
        show={isBlogSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}
