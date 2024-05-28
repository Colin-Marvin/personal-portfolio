import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./index.css"; // Assuming your CSS is named index.css and in the same directory

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        IX Prototype Blog
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Homepage
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
