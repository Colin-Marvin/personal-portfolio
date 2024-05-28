import React from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
import Footer from "../Footer";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";
import BlogList from "../BlogList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;
const datum = data.blogPosts;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <BlogList blogPosts={datum} />
        <Footer />
      </div>
    </>
  );
}
