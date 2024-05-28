import React from "react";
import PropTypes from "prop-types";

import "./index.css";

export default function CategoriesList({ categories }) {
  if (!categories && !categories.length) {
    console.error("Expected categories to not fail", categories);
    return null; // Or some fallback UI
  }
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: `${category.color}33`,
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
              <div className="card-body">
                <p className="card-text">
                  {category.description.substring(0, 100)} ...
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
};
