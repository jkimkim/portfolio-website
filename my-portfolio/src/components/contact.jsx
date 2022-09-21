import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="contact">
            <h1>Contact Me</h1>
            <h2>Get in touch</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:
                        ">Email</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>Phone</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <div className="contact-text">
                    <h3>LinkedIn</h3>
                    <p>
                        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div className="contact-text">
                    <h3>Github</h3>
                    <p>
                        <a href="
                        " target="_blank" rel="noopener noreferrer">Github</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
