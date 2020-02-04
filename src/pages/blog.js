import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import consoleMessage from '../utils/ConsoleLog';

const BlogPage = () => {
  consoleMessage();
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="section has-background-white">
        <div className="container">
          <h3 className="subtitle is-4">Blog</h3>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
