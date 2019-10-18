import React, { Component } from 'react';
import imag1 from '../graphics/slide-long/imageIntro-1.jpeg';
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
              
            <div className = "imageIntroMain">
                <div className = "mainDescription">
                        <br/>
                        <p className = 'descTit' >  
                        { todo.title }
                        </p>
                        <p className = "Description ">
                        { todo.description }   
                        </p>
                        <p className = 'Date'>
                            { todo.date }
                        </p>
                        <p className = 'Date'>
                            { todo.tags }
                        </p>
                </div>
                <div>
                    <a href = "Sitio del imagen">
                        <img src = {imag1}
                        className = 'imgIntro' alt = "img1" />
                    </a>
                        <Boton></Boton>                        
                    
                </div>
            </div>

               
            )
        })
        return (
            <div>
                <div> {todos}</div>    
            </div>
        )
    }
}
