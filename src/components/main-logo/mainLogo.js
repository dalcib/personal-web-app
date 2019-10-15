import React, { Component } from 'react';
import LogoP from '../graphics/Logo.png';
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default class mainLogo extends Component {
    render() {
        return (
        <Router>        
            <div>
                <Link to="/HomeNews">
                    <img src = {LogoP}
                    className = 'mainLogo' alt = "Logo Alex"/>
                    
                </Link>
            </div>
        </Router>       
        )
    }
}
