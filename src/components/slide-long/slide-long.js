import React, { Component } from 'react';
import imag2 from '../graphics/slide-long/imageIntro-2.jpeg';
import imag3 from '../graphics/slide-long/imageIntro-3.jpeg';
import Boton from '../btn-more/buttonMore';
import { todos } from '../../todos.json';
import Img from 'react-image';


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
        const img1= todo.img1;
        console.log(img1);  
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
                        <Boton></Boton>
                </div>
                <div>
                    <br/>
                
                    <a href = "Sitio del imagen">
                        <img source = {'http://via.placeholder.com/350x150'}
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
                </div>
                <br/>
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
