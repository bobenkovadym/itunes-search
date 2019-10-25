import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <h1 className="navbar-brand">
          <i className={icon} />{' '}{title}
        </h1>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </nav>
    );
  };

Navbar.defaultProps = {
  title: 'iTunes Search',
  icon: 'fab fa-itunes-note'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
