import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => (
  <Fragment>
    <section id="skill-spacer" className="section hero">
      <div className="hero-body">
        <div id="skill-cards" className="container">
          <h3 className="subtitle is-2">What I do:</h3>
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
                  Excel at implementing clean, functional designs and highly-optimized
                  applications, utilizing the latest technology from Rails 6 and React 16.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered is-vcentered">
            <div className="column is-one-fifth">
              <h3 className="subtitle is-3 has-text-centered">Skillset:</h3>
            </div>
            <div className="column is-two-fifths">
              <div className="tags">
                <div className="tag is-info is-medium">React 16</div>
                <div className="tag is-info is-medium">Ruby on Rails 6</div>
                <div className="tag is-info is-medium">Webpack</div>
                <div className="tag is-info is-medium">Heroku</div>
                <div className="tag is-info is-medium">Sass</div>
                <div className="tag is-info is-medium">Flexbox</div>
                <div className="tag is-info is-medium">CSS Grid</div>
                <div className="tag is-info is-medium">ES6 JavaScript</div>
                <div className="tag is-info is-medium">UX Optimization</div>
                <div className="tag is-info is-medium">ERB</div>
                <div className="tag is-info is-medium">Gatsby</div>
                <div className="tag is-info is-medium">Git</div>
                <div className="tag is-info is-medium">Redux</div>
                <div className="tag is-info is-medium">CI / CD</div>
                <div className="tag is-info is-medium">Node</div>
                <div className="tag is-info is-medium">TDD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Skills;
