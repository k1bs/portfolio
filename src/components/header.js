import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
  <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          to="/"
        >
            Alex Kibler
        </Link>
        <button type="button" className="navbar-burger button is-primary" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link
            className="navbar-item"
            to="/blog"
          >
              Blog
          </Link>
          <Link
            className="navbar-item"
            to="/portfolio"
          >
              Portfolio
          </Link>
        </div>
      </div>
    </div>
  </nav>

);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: '',
// };

export default Header;
