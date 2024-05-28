import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import "./index.css";

const data = require("../../dummy-data.json");
let blogsDummyData = data.blogPosts;
const categoriesDummyData = data.categories;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState(blogsDummyData);
  const [categoryId, setCategoryId] = useState();

  if (categoryId) {
    blogsDummyData.filter((blog) =>
      blog.categories.some(function (category) {
        return category.id === categoryId;
      })
    );
  }

  useEffect(() => {
    if (categoryId) {
      const filteredBlogs = blogsDummyData.filter((blog) =>
        blog.categories.some(function (category) {
          return category.id === categoryId;
        })
      );
      setBlogs(filteredBlogs);
    }
  }, [categoryId]);

  const CategoriesList = (categoryId) => {
    return categoriesDummyData.map((category) => {
      return categoryId === category.id ? (
        <button
          key={category.id}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "blue" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      ) : (
        <button
          key={category.id}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}
