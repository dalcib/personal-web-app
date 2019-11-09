import React, { Component } from 'react'
import GameMac from '../../components/graphics/foto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple , faWindows } from '@fortawesome/free-brands-svg-icons';
import './btndownload.css'

export default class btndownload extends Component {
    
    
    render() {
        return (
            <div className = 'download-container'>
                <h2>Download</h2>
                <ul> 
                    <li>
                            <a href={GameMac} download>
                                <FontAwesomeIcon className = 'Icon' icon ={faApple} size = '4x'></FontAwesomeIcon>
                            </a>
                            <p>version 1.1 for mac</p>
                    </li>
               <br/>
                    <li>
                            <a href={GameMac} download>
                            <FontAwesomeIcon className = 'Icon' icon ={faWindows} size = '4x'></FontAwesomeIcon>
                            </a>
                            <p>version 1.1 for Windows</p>
                    </li>
               </ul>
            </div>
        )
    }
}
