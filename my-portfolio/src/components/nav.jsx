import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "./css/assets/blackjack-1.png";
import "./css/nav.css";

class Navcontainer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="navbar  navbar-light">
              <div className="branding">
                <a className="navbar-brand" href="#">
                  <img className="logo"
                    src={logo}
                    alt="logo"
                  />
                  <span className="p-name">John Kimiti</span>
                </a>
              </div>
              <ul className="nav nav-pills float-md-end">
                <li className="nav-item">
                  <a className="nav-link fw-bold active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item fw-semibold">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="cv-btn px-2" type="button">Download CV 
              <FontAwesomeIcon icon="fa-solid fa-download" className="ps-2 d-ico" />
              </button>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navcontainer;
