import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./css/assets/blackjack-1.png";
import "./css/nav.css";

class Navcontainer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="branding navbar-brand" href="#">
              <img className="logo" src={logo} alt="logo" />
              <span className="p-name">John Kimiti</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span ><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="cv-btn px-2" type="button">
                <a className="cv-link" href="https://drive.google.com/file/d/1jeGk_m6NuZ7Xt4L3SiIQA2B316EeKAQ2/view?usp=sharing" target="_blank" rel="noreferrer">
                Download CV
                </a>
                <FontAwesomeIcon
                  icon="fa-solid fa-download"
                  className="ps-2 d-ico"
                />
              </button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navcontainer;
