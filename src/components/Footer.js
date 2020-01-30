import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-three-quarters is-two-fifths-desktop">
          <div className="level is-mobile">
            <a
              href="https://twitter.com/alexskibler"
              className="level-item has-text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="3x" icon={['fab', 'twitter']} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexkibler/"
              className="level-item has-text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
            </a>
            <a
              href="https://www.instagram.com/alexkibler/"
              className="level-item has-text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="3x" icon={['fab', 'instagram']} />
            </a>
            <a
              href="https://github.com/k1bs/"
              className="level-item has-text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="3x" icon={['fab', 'github']} />
            </a>
          </div>
        </div>
      </div>
      <div className="has-text-centered">
        <h6 className="title is-6 has-text-white">Made with Gatsby | 2020</h6>
      </div>
    </div>
  </footer>
);

export default Footer;
