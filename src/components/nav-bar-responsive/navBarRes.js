import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Nav from '../side-nav/side-nav'

import '../nav-bar-responsive/navBarRes.css'

export default class navBarRes extends Component {
    render() {
        return (
            <div className="btnContainer">
                <a>
                    <div className = 'Main' >
                        <FontAwesomeIcon
                            className = 'Icon'
                            icon={faPlus} size="2x"
                        />
                        <div className="ocultar">
                            <ul>
                                <li>
                                    <a href= {this.props.r1}>
                                        <p className = 't'>{this.props.t1}</p>
                                        <p className ='s' >{this.props.s1}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href = {this.props.r2}>
                                        <p className = 't'>{this.props.t2}</p>
                                        <p className = 's'>{this.props.s2}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href= {this.props.r3}>
                                        <p className = 't'>{this.props.t2}</p>
                                        <p className = 's'>{this.props.s2}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

