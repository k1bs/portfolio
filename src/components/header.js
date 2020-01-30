import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to="/"
          >
              Alex Kibler
          </Link>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className={`navbar-burger button is-primary${open ? ' is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu${open ? ' is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item" href="#about-me">About Me</a>
            <a className="navbar-item" href="#skill-spacer">Skills</a>
            <a className="navbar-item" href="#projects-header">Projects</a>
            <a className="navbar-item" href="#contact-me">Contact</a>
            <a
              className="navbar-item"
              href="https://github.com/k1bs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/alexkibler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {/* <Link
              className="navbar-item"
              to="/contact"
            >
                Blog
            </Link> */}
          </div>
        </div>
      </div>
    </nav>

  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: '',
// };

export default Header;
