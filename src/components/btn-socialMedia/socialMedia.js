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
            <div className = 'footer'>
                
                <a 
                classname = 'in'
                href = 'www.instagram.com'> 
                <FontAwesomeIcon icon = {faInstagram} />
                </a>
                <a 
                classname = 'in'
                href = 'www.instagram.com'> 
                <FontAwesomeIcon icon = {faFacebook} />
                </a>
                <a 
                classname = 'in'
                href = 'www.instagram.com'> 
                <FontAwesomeIcon icon = {faTwitter} />
                </a>
                <a 
                classname = 'in'
                href = 'www.instagram.com'> 
                <FontAwesomeIcon icon = {faVimeo} />
                <a 
                classname = 'in'
                href = 'www.instagram.com'> 
                <FontAwesomeIcon icon = {faYoutube} />
                </a>
                <a 
                classname = 'in'
                href = 'www.instagram.com'> 
                <FontAwesomeIcon icon = {faGithub} />
                </a>
                </a>
            </div>
        )
    }
}
