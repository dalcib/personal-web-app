import './smStyle.css'; 
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';

export default class socialMedia extends Component {
    render() {
        return (
            <Router>
                <div className = 'socialcont'>
                    <p className = "follow"> Follow me</p>
                    <div className = 'midle'>
                        <a href  = "https://www.instagram.com/soyalextreme/" target ="_blank" >
                        <FontAwesomeIcon icon = {faInstagram} className = 'ic' size="2x" />
                        </a>
                    </div>   
                    <div className = 'midle'>
                    <a href  = "https://www.facebook.com/soyalextreme/" target ="_blank" >
                        <FontAwesomeIcon icon = {faFacebook} className = 'ic' size="2x" />
                        </a>
                    </div>
                    <div className = 'midle'>
                        <a href  = "https://twitter.com/SoyAlextreme" target = "_blank">
                            <FontAwesomeIcon icon = {faTwitter} className = 'ic' size="2x"/>
                        </a>
                    </div>
                    <div className = 'midle'>
                        <a href  = "https://vimeo.com/user98212220" target = "_blank">
                            <FontAwesomeIcon icon = {faVimeo} className = 'ic' size="2x"/>
                        </a>
                    </div>
                    <div className = 'midle'>
                        <a href  = "https://www.youtube.com/channel/UC7ggPlXdzOgs2rh69V5Xdmw?view_as=subscriber" target = "_blank">
                            <FontAwesomeIcon icon = {faYoutube} className = 'ic' size="2x"/>
                        </a>
                    </div>
                    <div className = 'midle'>
                        <a href  = "https://github.com/soyalextreme" target = "_blank">
                            <FontAwesomeIcon icon = {faGithub} className = 'ic' size="2x"/>
                        </a>
                    </div>
                </div>
            </Router>
        )
    }
}
