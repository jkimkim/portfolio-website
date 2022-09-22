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
              <button className="btn btn-secondary" type="button">Download CV</button>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navcontainer;
