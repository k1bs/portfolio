import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import SEO from '../components/seo';
import consoleMessage from '../utils/ConsoleLog';

const IndexPage = () => {
  consoleMessage();
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutMe />
      <Skills />
    </Layout>
  );
};

export default IndexPage;
