import React, { Component } from 'react';
class Navcontainer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navcontainer;