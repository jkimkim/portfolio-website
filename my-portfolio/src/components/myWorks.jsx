import React, { Component } from 'react';
class MyWorks extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-works">
                                <h2>My Works</h2>
                                <p>Here are some of my works</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work">
                                <img src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png" alt="work"/>
                                <h3>Work 1</h3>
                                <p>Some text about the work</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work">
                                <img src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png" alt="work"/>
                                <h3>Work 2</h3>
                                <p>Some text about the work</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work">
                                <img src="https://www.freepnglogos.com/uploads/logo-portfolio-png/logo-portfolio-portfolio-logo-png-0.png" alt="work"/>
                                <h3>Work 3</h3>
                                <p>Some text about the work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
export default MyWorks;