import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => (
  <Fragment>
    <section className="hero is-medium is-info">
      <div className="hero-body">
        <h3 className="subtitle is-2 has-text-centered">What I do:</h3>
      </div>
    </section>
    <div id="skill-cards" className="container">
      <div className="columns is-variable is-6">
        <div className="column">
          <div className="box">
            <div className="box-icon-container has-text-centered">
              <span className="icon is-large">
                <FontAwesomeIcon size="3x" icon="mobile" />
              </span>
            </div>
            <h4 className="subtitle is-4 has-text-centered">Mobile Friendly</h4>
            <p className="has-text-centered">
              Skilled in building responsive,
              highly-usable, mobile-first web layouts,
              ensuring your site is functional across multiple devices.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="box-icon-container has-text-centered">
              <span className="icon is-large">
                <FontAwesomeIcon size="3x" icon="cash-register" />
              </span>
            </div>
            <h4 className="subtitle is-4 has-text-centered">Ecommerce</h4>
            <p className="has-text-centered">
              Experience building performant ecommerce themes,
              easy-to-use ecommerce platform admin applications,
              and optimizing workflows to turn users into customers.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="box-icon-container has-text-centered">
              <span className="icon is-large">
                <FontAwesomeIcon size="3x" icon="code-branch" />
              </span>
            </div>
            <h4 className="subtitle is-4 has-text-centered">Cutting Edge Tech</h4>
            <p className="has-text-centered">
              Excels at implementing clean, functional designs and highly-optimized
              applications, utilizing the latest technology from Rails 6 and React 16.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Skills;
