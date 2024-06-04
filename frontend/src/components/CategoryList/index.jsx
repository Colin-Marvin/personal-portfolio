import React from "react";
import PropTypes from "prop-types";

import "./index.css";

//import EditButtons from "../EditButtons";

export default function CategoriesList({ categories, onEdit, onDelete }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!categories || !categories.length) {
    return null;
  }

  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="card"
            style={{
              borderRadius: "0px",
              border: "none",
              position: "relative",
            }}
            onClick={() => {
              console.log("TODO: Navigate to categories page");
            }}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: category.color + "33",
              }}
            >
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">
                {category.description.substring(0, 100)} ...
              </p>
            </div>
            {user && user?.token && onEdit && onDelete && (
              <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the card's onClick from firing
                    onEdit(category);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the card's onClick from firing
                    onDelete(category);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
};
