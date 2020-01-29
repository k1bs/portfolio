/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Contact = () => (
  <section id="contact-me" className="section hero is-info">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h3 className="subtitle is-3">Contact:</h3>
            <form
              action="https://formspree.io/alex@alex-kibler.com"
              method="POST"
            >
              <div className="field">
                <label htmlFor="#name" className="label has-text-white">Name</label>
                <div className="control">
                  <input id="name" name="name" className="input" type="text" placeholder="Jane Doe" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="#email" className="label has-text-white">Email</label>
                <div className="control">
                  <input id="email" name="_replyto" className="input" type="text" placeholder="duffman@duffbeer.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="#name" className="label has-text-white">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="What shall we work on together?" />
                </div>
              </div>
              <div className="field">
                <div className="buttons">
                  <input type="submit" className="button is-primary" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
