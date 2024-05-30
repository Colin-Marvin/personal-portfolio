import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import blogService from "../../services/blogService";
import AuthorDetails from "../../components/AuthorDetails";
import BlogList from "../../components/BlogList";
import EditProfileModal from "../../components/EditProfileModal";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import DeleteBlogModal from "../../components/DeleteBlogModal";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";

export default function ProfilePage() {
  const [blogs, setBlogs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthorBlogs = async () => {
      try {
        setIsLoading(true);
        const blogs = await blogService.fetchBlogsByAuthorId(authorId);
        setBlogs(blogs.data);
        setIsSuccess(true);
        setMessage(blogs.message);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        setMessage(error.message || error);
      }
    };
    getAuthorBlogs();
  }, [authorId]);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  };

  const resetError = () => {
    setIsError(false);
    setMessage("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <AuthorDetails />
        <p className="page-subtitle">Author Blog Posts</p>
        <BlogList blogPosts={authorBlogs} />
        <Footer />
      </div>
      <EditProfileModal />
      <AddEditBlogModal />
      <DeleteBlogModal />
      <SuccessToast show={isSuccess} message={message} onClose={resetSuccess} />
      <ErrorToast show={isError} message={message} onClose={resetError} />
    </>
  );
}
