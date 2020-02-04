import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Post = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section className="section has-background-white">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <h1 className="title is-2">{frontmatter.title}</h1>
              <h2 className="subtitle is-4">{frontmatter.date}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
