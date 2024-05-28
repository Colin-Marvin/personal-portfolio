import React from "react";
import PropTypes from "prop-types";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
              padding: "8px 16px", // Adds padding around the text
              display: "inline-block", // Changes display to inline-block
              margin: "5px", // Adds margin for spacing between tags
              borderRadius: "5px", // Optional: adds rounded corners
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}

Categories.prototype = {
  blogPost: PropTypes.string.isRequired,
};
