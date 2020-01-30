import React from 'react';
import ProfilePhoto from './images/ProfileImage';

const AboutMe = () => (
  <section id="about-me" className="section is-medium">
    <div className="container">
      <div className="columns is-desktop is-centered is-vcentered">
        <div className="column is-full is-half-desktop">
          <h2 className="subtitle is-2">About me:</h2>

          <p>
            I&apos;m a full-stack web developer, lover (and streamer) of games and game design,
            pressure cooker aficionado, React ninja, and have been making glasses cool
            again since 1997.
            You&apos;re likely to find me on the golf course, in a river with a
            fly rod, or on a hiking trail in the mountains. My professional career has
            spanned three states, four companies, and two completely separate careers.
            I&apos;m equally comfortable in front of people as in front of an IDE.
            I look forward to seeing what we can build together.
          </p>

        </div>
        <div className="column is-full is-one-quarter-desktop">
          <figure id="headshot-image" className="has-image-centered image is-256x256">
            <ProfilePhoto />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
