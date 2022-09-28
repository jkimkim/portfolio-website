import React, { Component } from "react";
import logo from "./css/assets/blackjack-1.png";
import "./css/body.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

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
                  <div className="description">
                  <h1 className="fw-bold">
                    I'm <br />
                    <span className="f-name">John</span>{" "}
                    <span className="l-name"> Kimiti</span>
                  </h1>
                  <p className="p-description">Full Stack Web Developer</p>
                  </div>
                  
                  <div className="john-img-social">
                    <div className="body-img-container">
                      <img className="john" src={logo} alt="John Kimiti" />
                    </div>
                    <div className="empty"></div>
                    <div className="social">
                      <h6 className="follow">Follow Me</h6>
                      <div className="line"></div>
                      <div className="icons">
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </a>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </a>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </a>
                        <a href="#">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>                
                </div>
                <div className="quote">
                  <p className="quote-text">
                    "The only way to do great work is to love what you do."
                  </p>
                  <p className="quote-author">Steve Jobs</p>
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
