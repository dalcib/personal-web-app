import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';


class Navegation extends Component {
    render() {
        return (
          <Router>
           <nav className="navBar">
                <li>
                    <ul>
                        <div>
                            <Link to = "/MyWork" className="Item">
                                {this.props.tit}
                                <p className = 'Subtittle'>
                                    {this.props.subt1}
                                </p>
                            </Link>
                            
                        </div>
                    </ul>
                    <ul>
                        <div>
                            <Link to="/Products" className="Item">
                                {this.props.tit2}
                                <p className = 'Subtittle'>
                                    {this.props.subt2}
                                </p>
                            </Link>
                            
                        </div>
                    </ul>
                    <ul>
                        <div>
                            <Link to = '/AboutMe' className="Item">
                                {this.props.tit3}
                                <p className = 'Subtittle'>
                                    {this.props.subt3}
                                </p>
                            </Link>
                            
                        </div>
                    </ul>
                </li>
            </nav>
            </Router> 
        )
    }
}

export default Navegation;