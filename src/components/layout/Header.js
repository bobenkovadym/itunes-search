import React from "react";
import PropTypes from "prop-types";

const Header = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow mb-3">
        <h1 className="navbar-brand">
          <i className={icon} /> <span className="hide-sm">{title}</span>
        </h1>
    </nav>
  );
};

Header.defaultProps = {
  title: "iTunes Search",
  icon: "fab fa-itunes-note"
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Header;
