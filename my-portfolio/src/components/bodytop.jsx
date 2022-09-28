import React, { Component } from "react";
import logo from "./css/assets/blackjack-1.png";
import "./css/body.css";
// import Bg from "./css/assets/bg1.png"
class Bodytop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container bg">
          {/* <img className="bg" src={Bg} alt="background" /> */}
          <div className="row">
            <div className="">
              <div className="body-top">
                <h1 className="hellotxt">HELLO</h1>
                <div className="aboutme">
                  <h1 className="fw-bold">
                    I'm <br />
                    <span className="f-name">John</span>{" "}
                    <span className="l-name"> Kimiti</span>
                  </h1>
                  <p className="p-description">Full Stack Web Developer</p>
                  <div className="btns">
                    <a href="#" className="btn btn-primary">
                      Hire Me
                    </a>
                    <a href="#" className="btn btn-outline-primary">
                      View Portfolio
                    </a>
                  </div> 
                  <div className="john-img-social">
                    <div className="body-img-container">
                      <img className="john" src={logo} alt="John Kimiti" />
                    </div>
                    <div className="social">
                      <h3>Follow Me</h3>
                      <div className="line"></div>
                      <div className="icons">
                        <a href="#">
                          <i className="fab fa-facebook-f" alt="facebook"></i>
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
                      </div>
                    </div>
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
