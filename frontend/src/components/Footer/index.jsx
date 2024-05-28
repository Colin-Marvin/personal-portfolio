import React from "react";
//import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container text-center">
      <div className="container p-4 pb-0">
        <ul className="social-links">
          {/* Facebook */}
          <li className="social-link-item">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/colin.marvin.16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          {/* Twitter */}
          <li className="social-link-item">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/EdwardMarvin12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          {/* Google */}
          <li className="social-link-item">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
          {/* Instagram */}
          <li className="social-link-item">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/colinmarvin_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          {/* LinkedIn */}
          <li className="social-link-item">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/colin-marvin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          {/* GitHub */}
          <li className="social-link-item">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Colin-Marvin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      <div className="copy-right-section">
        © 2024 Click here for my{" "}
        <a className="text-body" href="https://mdbootstrap.com/">
          personal portfolio!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
