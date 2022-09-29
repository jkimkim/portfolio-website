import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faMobileScreen} from '@fortawesome/free-solid-svg-icons';

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