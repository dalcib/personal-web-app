import React, { Component } from 'react'
import GameMac from '../../downloadFiles/JumpBallerVersionFinal.zip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple , faWindows } from '@fortawesome/free-brands-svg-icons';

export default class btndownload extends Component {
    
    
    render() {
        return (
            <div>
                <ul> 
                    <li>
                        <a href={GameMac} download>
                                <FontAwesomeIcon icon ={faApple} size = '4x'></FontAwesomeIcon>
                        </a>
                        <p>download version 1.1 for mac</p>
                    </li>
               <br/>
                    <li>
                        <a href={GameMac} download>
                            <FontAwesomeIcon icon ={faWindows} size = '4x'></FontAwesomeIcon>
                        </a>
                        <p>download version 1.1 for Windows</p>
                    </li>
               </ul>
            </div>
        )
    }
}
