import React, { Component } from 'react'
import {descriptionJumpBaller} from '../../descriptionJumpBaller.json'
import Button from '../btn-download/btndownload'
import './slideVideoGame.css'

export default class SlideVideogame extends Component {
    constructor(){

        super();
        this.state={
            descriptionJumpBaller

        }
    }
    
    render() {
        const renderMap = this.state.descriptionJumpBaller.map((descr,i)=>{
            return(
               <div className= 'card-Container'>


                    <div className = 'tittle-container'>
                         <p> {descr.title}</p>
                    </div>
                    <div className = 'tags-container'>
                        <p> {descr.tags}</p>
                    </div>
                    <div className = 'description-container'>
                        <p> {descr.description}</p>
                    </div>
                    <Button className = 'button-container'/>
                </div>
            )
        })
        return (
            <div>
                <div> {renderMap}</div>
            </div>
        )
    }
}
