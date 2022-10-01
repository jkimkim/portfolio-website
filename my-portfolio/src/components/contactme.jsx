import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

class Contactme extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="contact">
                        <div className="contact-bg">
                            <div className="bg3"></div>
                        </div>
                        <div className="contact-bg2">
                            <h1>Contact Me</h1>
                            <div className="contact-item">
                                <div className="icon">
                                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                                </div>
                                <div className="contact-text">
                                    <h3>Call me</h3>
                                    <p>+254790448571</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                </div>
                                <div className="contact-text">
                                    <h3>Email</h3>
                                    <p>
                                        <a
                                            href="mailto:wairia21@yahoo.com
                            "
                                        >
                                            wairia21@yahoo.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contactme;
