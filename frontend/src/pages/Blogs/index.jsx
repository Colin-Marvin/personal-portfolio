import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import CategoriesList from "../../components/CategoryList";

import { useParams } from "react-router-dom";

import "./index.css";

import blogService from "../../services/blogService";

export default function BlogsPage() {
  const { categoryIdParam } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blogs based on category
  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        // Adjust the URL or function according to your API structure
        // This assumes your API can filter blogs by category ID
        const result = await blogService.getBlogsByCategory(categoryIdParam);
        setBlogs(result);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [categoryIdParam]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          {/* Passing down the handler to change category */}
          <CategoriesList categoryId={categoryIdParam} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <BlogList blogPosts={blogs} />}
      </div>
      <Footer />
    </div>
  );
}
