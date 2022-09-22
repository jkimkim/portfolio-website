import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Contactme extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="contact">
                        <h1>Contact Me</h1>
                        <div className="contact-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>call me</p>
                  </div>
                </div>
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
                </div>
                </div>
                </React.Fragment>
        );
    }
}
 
export default Contactme;