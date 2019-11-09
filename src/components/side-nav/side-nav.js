import React, { Component } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';


class Navegation extends Component {
    render() {
        return (
          <Router>
          <div>
            <nav className="navBar">
                    <li>
                        <ul>
                            <div>
                                <a href = {this.props.ref1} className="Item">
                                    {this.props.tit}
                                    <p className = 'Subtittle'>
                                        {this.props.subt1}
                                    </p>
                                </a>
                                
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a href = {this.props.ref2} className="Item">
                                    {this.props.tit2}
                                    <p className = 'Subtittle'>
                                        {this.props.subt2}
                                    </p>
                                </a>
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a href = {this.props.ref3} className="Item">
                                    {this.props.tit3}
                                    <p className = 'Subtittle'>
                                        {this.props.subt3}
                                    </p>
                                </a>
                                
                            </div>
                        </ul>
                    </li>
                </nav>
            </div>
            </Router> 
        )
    }
}

export default Navegation;