import React, {
  Fragment, useState, useRef, useEffect,
} from 'react';
import CheckoutImage from './images/CheckoutImage';
import Admin1 from './images/Admin1';
import LionbotImage from './images/LionbotImage';
import ChkmarkImage from './images/ChkmarkImage';
import AdminVideo from './images/AdminVideo';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalContent = useRef(null);
  const handleClickOutside = (e) => {
    if (modalOpen && modalContent.current && !modalContent.current.contains(e.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <Fragment>
      <section id="projects-header" className="section is-medium">
        <h3 className="title is-1 has-text-centered has-text-primary">Projects:</h3>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="columns container is-vcentered is-variable is-6">
                <div className="column project-column">
                  <figure className="image is-256x256">
                    <CheckoutImage />
                  </figure>
                </div>
                <div className="column">
                  <h3 className="subtitle is-4">React Checkout - Engine Commerce</h3>
                  <div className="content">
                    <p>
                    Ground-up build of React-based, single-page checkout for all Engine Commerce
                    client sites. Built on top of legacy Ruby on Rails backend, this checkout app
                    utilizes new and existing API endpoints to deliver to the customer a
                    seamless checkout experience that helped to increase site conversion by 15%
                    and revenue by 54%. Check out an example at Simpson Motorcycle.
                    </p>
                  </div>
                  <div className="buttons">
                    <a className="button is-primary" rel="noopener noreferrer" target="_blank" href="https://www.simpsonmotorcyclehelmets.com/">Visit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="columns is-vcentered is-variable is-6">
                <div className="column project-column">
                  <figure className="image is-256x256">
                    <Admin1 />
                  </figure>
                </div>
                <div className="column">
                  <h3 className="subtitle is-4">Admin Rebuild - Engine Commerce</h3>
                  <div className="content">
                    <p>
                    Implementation of site admin redesign, with React / Redux single-page apps
                    interspersed with traditional ERB templating. Implemented new API endpoints,
                    and created custom React wrappers around numerous open-source input components.
                    Reduced page reloads in common client workflows by more than 50%.
                    (Code and admin are proprietary)
                    </p>
                  </div>
                  <div className="buttons">
                    <button
                      className="button is-info"
                      type="button"
                      onClick={() => setModalOpen(true)}
                    >
                      Show Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="columns is-vcentered is-variable is-6">
                <div className="column project-column">
                  <figure className="image is-256x256">
                    <ChkmarkImage />
                  </figure>
                </div>
                <div className="column">
                  <h3 className="subtitle is-4">chk(mark)</h3>
                  <div className="content">
                    <p>
                    Markdown-enabled note-taking app, used as an exercise to teach myself
                    Redux. Built on top of a Rails 5 backend, this project was my capstone
                    at General Assembly.
                    </p>
                  </div>
                  <div className="buttons">
                    <a className="button is-primary" rel="noopener noreferrer" target="_blank" href="http://chkmark.herokuapp.com/">Visit</a>
                    <a className="button is-info" rel="noopener noreferrer" target="_blank" href="https://github.com/k1bs/chkmark">Source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="columns is-vcentered is-variable is-6">
                <div className="column project-column">
                  <figure className="image is-256x256">
                    <LionbotImage />
                  </figure>
                </div>
                <div className="column">
                  <h3 className="subtitle is-4">Lionbot</h3>
                  <div className="content">
                    <p>
                    Twitch chat-bot interface, allowing users to create, edit, and toggle
                    chat commands. Built with React on top of a Node backend.
                    </p>
                  </div>
                  <div className="buttons">
                    <a className="button is-primary" rel="noopener noreferrer" target="_blank" href="http://aoa-lionbot.herokuapp.com/">Visit</a>
                    <a className="button is-info" rel="noopener noreferrer" target="_blank" href="https://github.com/k1bs/lionbot">Source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" />
      <div className={`modal ${modalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div ref={modalContent} className="modal-content">
          <AdminVideo />
        </div>
        <button
          type="button"
          className="modal-close is-large"
          onClick={() => setModalOpen(false)}
          aria-label="close"
        />
      </div>
    </Fragment>

  );
};

export default Projects;
