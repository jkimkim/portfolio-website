import React, { Component } from 'react';
class Bodytop extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="body-top">
                                <h1>John Kimiti</h1>
                                <p>Full Stack Web Developer</p>
                                <div className="btns">
                                    <a href="#" className="btn btn-primary">Hire Me</a>
                                    <a href="#" className="btn btn-outline-primary">View Portfolio</a>
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
