import React from 'react';

import ScrollIndicator from './ScrollIndicator';

const Hero = () => (
  <section id="home-hero" className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 id="hero-main-title" className="title is-1">
          Hi, I&apos;m Alex.
        </h1>
        <h4 className="subtitle is-3">
          I&apos;m a web developer.
        </h4>
      </div>
    </div>
    <div className="hero-blob" id="blob-1" />
    <div className="hero-blob" id="blob-2" />
    <ScrollIndicator />
  </section>
);

export default Hero;
