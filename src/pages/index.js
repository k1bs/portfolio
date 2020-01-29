import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SEO from '../components/Seo';
import consoleMessage from '../utils/ConsoleLog';
import Contact from '../components/Contact';

const IndexPage = () => {
  consoleMessage();
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
