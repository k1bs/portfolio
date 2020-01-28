import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import Image from '../components/image';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import consoleMessage from '../utils/ConsoleLog';

const IndexPage = () => {
  consoleMessage();
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <div className="box-icon-container has-text-centered">
                  <span className="icon is-large">
                    <FontAwesomeIcon size="3x" icon="mobile" />
                  </span>
                </div>
                <h4 className="subtitle is-4 has-text-centered">Mobile Friendly</h4>
                <p>
                  Skilled in building responsive,
                  highly-usable, mobile-first web layouts,
                  ensuring your site is functional across multiple devices.
                </p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <div className="box-icon-container has-text-centered">
                  <span className="icon is-large">
                    <FontAwesomeIcon size="3x" icon="cash-register" />
                  </span>
                </div>
                <h4 className="subtitle is-4 has-text-centered">Ecommerce</h4>
                <p>
                  Experience building performant ecommerce themes,
                  easy-to-use ecommerce platform admin applications,
                  and optimizing workflows to turn users into customers.
                </p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <div className="box-icon-container has-text-centered">
                  <span className="icon is-large">
                    <FontAwesomeIcon size="3x" icon="code-branch" />
                  </span>
                </div>
                <h4 className="subtitle is-4 has-text-centered">Cutting Edge Tech</h4>
                <p>
                  Excels at implementing clean, functional designs and highly-optimized
                  applications, utilizing the latest technology from Rails 6 and React 16.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
