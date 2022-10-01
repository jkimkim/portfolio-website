import React, { Component } from "react";
class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="my-works">
            <h1>Recent Works</h1>
          </div>
          <div className="proj">
            <div className="col-md-4">
              <div className="proj-pic">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                  alt="work"
                />
                <h3>jkimtech</h3>
                <p>personal project</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proj-pic">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                  alt="work"
                />
                <h3>Tomioes</h3>
                <p>Blog</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proj-pic">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                  alt="work"
                />
                <h3>jkim.tech.blog</h3>
                <p>Tech Blog</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proj-pic">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                  alt="work"
                />
                <h3>Jplayer</h3>
                <p>music player</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proj-pic">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                  alt="work"
                />
                <h3>Work 2</h3>
                <p>Some text about the work</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="proj-pic">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png"
                  alt="work"
                />
                <h3>Work 3</h3>
                <p>Some text about the work</p>
              </div>
            </div>
          </div>
          <div className="view-works">
            <button className="btn btn-secondary view-works-btn" type="button">view all works</button>
            </div>           
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
