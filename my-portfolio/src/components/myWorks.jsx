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
                                <h1>WHAT I DO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-2">
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
                    <div className="skills">
                        <h1>Skills</h1>
                        <li className='skill-1'>skill</li>
                        <li className='skill-2'>skill</li>
                        <li className='skill-3'>skill</li>
                        <li className='skill-4'>skill</li>
                        </div>
                </div>
            </React.Fragment>
         );
    }
}
export default MyWorks;