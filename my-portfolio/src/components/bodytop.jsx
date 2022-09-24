import React, { Component } from "react";
import "./css/body.css";
class Bodytop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="body-top">
                <h1 className="hellotxt">HELLO</h1>
                <h1>
                  I'm <br />
                  <span className="f-name">John</span>{" "}
                  <span className="l-name"> Kimiti</span>
                </h1>
                <p>Full Stack Web Developer</p>
                <div className="btns">
                  <a href="#" className="btn btn-primary">
                    Hire Me
                  </a>
                  <a href="#" className="btn btn-outline-primary">
                    View Portfolio
                  </a>
                </div>
                <div className="social">
                  <h3>Follow Me</h3>
                  <a href="#" >
                    <i className="fab fa-facebook-f" alt= 'facebook'></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <div className="body-img-container">
                    <img
                        src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                        alt="John Kimiti"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Bodytop;
