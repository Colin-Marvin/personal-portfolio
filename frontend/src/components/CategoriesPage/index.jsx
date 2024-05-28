import React from "react";

// Components
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";

// Styles
import "../../App.css";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const categories = data.categories;

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
        </div>
        <CategoryList categories={categories}></CategoryList>
      </div>
      <Footer />
    </>
  );
}
