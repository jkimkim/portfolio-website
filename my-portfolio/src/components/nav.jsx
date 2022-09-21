import React, { Component } from "react";
class Navcontainer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="navbar  navbar-light bg-light">
              <div className="branding">
                <a className="navbar-brand" href="#">
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                    alt="logo"
                  />
                  <span>John Kimiti</span>
                </a>
              </div>
              <ul className="nav nav-pills float-md-end">
                <li className="nav-item">
                  <a className="nav-link" href="#">
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
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navcontainer;
