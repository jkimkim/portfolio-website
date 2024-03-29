import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navcontainer from './components/nav';
import Bodytop from './components/bodytop';
import MyWorks from './components/myWorks';
import Projects from './components/projects';
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEllipsisVertical,faMobileScreen, faLayerGroup, faCode, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedin, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

library.add(fab, faDownload, faMobileScreen, faEllipsisVertical, faFacebook, faGithub, faLinkedin, faTwitter, faInstagram, faLayerGroup , faCode, faPhone, faEnvelope)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navcontainer/>
    <Bodytop/>
    <MyWorks/>
    <Projects/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
