import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MyWorks extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container" id='portfolio'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-works">
                                <h1>WHAT I DO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-2">
                        <div className="col-md-4">
                            <div className="work flex">
                            <FontAwesomeIcon icon="fa-solid fa-code" className='skill-icon'/>
                                <p>Web dev</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work flex">
                            <FontAwesomeIcon icon="fa-solid fa-mobile-screen" className='skill-icon' />
                                <p>Mobile app dev</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work flex">
                            <FontAwesomeIcon icon="fa-solid fa-layer-group" className='skill-icon'/>
                                <p>Web Design</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work flex">
                                <h2 className='skill-icon'>UI/UX</h2>
                                <p>UI/UX design</p>
                            </div>
                        </div>
                    </div>
                    <div className="side-rec">
                        <div className="inner-rec"></div>
                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <div className="skills-bar">
                            <div className="bar">
                                <div className="info">
                                    <span>HTML</span>
                                    </div>
                                    <div className="progress-line html"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>CSS</span>
                                    </div>
                                    <div className="progress-line css"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>JavaScript</span>
                                    </div>
                                    <div className="progress-line js"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Java</span>
                                    </div>
                                    <div className="progress-line java"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>MySQL</span>
                                    </div>
                                    <div className="progress-line sql"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>React</span>
                                    </div>
                                    <div className="progress-line react"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>UI/UX</span>
                                    </div>
                                    <div className="progress-line ux"><span></span></div>
                            </div>
                        </div>
                        </div>
                </div>
            </React.Fragment>
         );
    }
}
export default MyWorks;