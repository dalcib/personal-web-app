import React, { Component } from 'react';
import imag2 from '../graphics/slide-long/imageIntro-2.jpeg';
import imag3 from '../graphics/slide-long/imageIntro-3.jpeg';
import Boton from '../btn-more/buttonMore';
import { todos } from '../../todos.json';

console.log(todos);


 
export default class imageIntro extends Component {
    constructor(){
        //super para heredar las propiedades de componente react 
        super();
        this.state = {
            todos
        }
    }
    render() {
       const todos = this.state.todos.map((todo,i) =>{
            return(
                <div className = "Card">
                    {todo.title}
                </div>
            )
        })
        return (
            <div>
                <div className = "imageIntroMain">
                    <div className = "mainDescription">
                        <br/>
                        <p className = 'descTit' >  
                         { this.props.tit}
                        </p>
                        <p className = "Description ">
                         {this.props.des}   
                        </p>
                        <p className = 'Date'>
                            {this.props.date}
                        </p>
                        <Boton></Boton>
                    </div>
                    <br/>
                    
                    
                    <a href = "Sitio del imagen">
                        <img src = {require('../graphics/slide-long/imageIntro-1.jpeg')}
                        className = 'imgIntro' alt = "img1" />
                    </a>
                    <a href = "Sitio del imagen">
                        <img src = {imag2}
                        className = 'imgIntro' alt = "img2" />
                    </a>
                    <a href = "Sitio del imagen">
                        <img src = {imag3}
                        className = 'imgIntro' alt = "img3" />
                    </a>
                    <div> {todos}</div>
                </div>
                <br/>
            </div>
        )
    }
}
