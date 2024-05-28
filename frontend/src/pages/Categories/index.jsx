import React, { useEffect, useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";

import categoriesService from "../../services/categoryService";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true); // Set loading to true when the fetch begins
      try {
        const categoryAPIdata = await categoriesService.getCategories();
        setCategories(categoryAPIdata);
        setLoading(false); // Set loading to false upon successful fetch
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories"); // Set error message on failure
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <CategoryList categories={categories}></CategoryList>
      </div>
      <Footer />
    </>
  );
}
