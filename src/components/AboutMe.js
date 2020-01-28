import React from 'react';
import ProfilePhoto from './Image';

const AboutMe = () => (
  <section className="section is-medium">
    <div className="level">
      <figure id="headshot-image" className="has-image-centered image is-256x256">
        <ProfilePhoto />
      </figure>
    </div>
    <h2 className="subtitle is-2 has-text-centered">About me:</h2>
  </section>
);

export default AboutMe;
