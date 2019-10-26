import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow mb-3">
        <h1 className="navbar-brand">
          <i className={icon} /> <span className="hide-sm">{title}</span>
        </h1>{" "}
        <ul className="navbar-nav mr-auto grid">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "iTunes Search",
  icon: "fab fa-itunes-note"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
