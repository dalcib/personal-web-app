import './smStyle.css'; 
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class socialMedia extends Component {
    render() {
        return (
            <div className = 'socialcont'>
                <div className = 'midle'>
                    <a href  = "URL" >
                    <FontAwesomeIcon icon = {faInstagram} className = 'ic' size="2x" />
                    </a>
                 </div>   
                <div className = 'midle'>
                    <a href  = "URL">
                        <FontAwesomeIcon icon = {faFacebook} className = 'ic' size="2x" />
                    </a>
                </div>
                <div className = 'midle'>
                    <a href  = "URL">
                        <FontAwesomeIcon icon = {faTwitter} className = 'ic' size="2x"/>
                    </a>
                </div>
                <div className = 'midle'>
                    <a href  = "URL">
                        <FontAwesomeIcon icon = {faVimeo} className = 'ic' size="2x"/>
                    </a>
                </div>
                <div className = 'midle'>
                    <a href  = "URL">
                        <FontAwesomeIcon icon = {faYoutube} className = 'ic' size="2x"/>
                    </a>
                </div>
                <div className = 'midle'>
                    <a href  = "URL">
                        <FontAwesomeIcon icon = {faGithub} className = 'ic' size="2x"/>
                    </a>
                </div>
            </div>
        )
    }
}
