import React, { Component } from 'react'
import './css/mainTittle.css'

export default class mainTittle extends Component {
    render() {
        return (
            <div className = "mainTittle">
                <h1 className = 'txt'> {this.props.txt }</h1>
            </div>
        )
    }
}
