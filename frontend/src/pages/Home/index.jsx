import React, { useEffect, useState } from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoryService";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        const blogAPIdata = await blogService.getBlogs();
        const categoryRes = await categoriesService.getCategories();
        setBlogs(blogAPIdata);
        setCategories(categoryRes);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const categoryAPIdata = await categoriesService.getCategories();
        setCategories(categoryAPIdata);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories");
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <CategoryList categories={categories} />
        <Footer />
      </div>
    </>
  );
}
