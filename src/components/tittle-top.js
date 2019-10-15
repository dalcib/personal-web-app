import React, { Component } from 'react'
import imag1 from './graphics/imageIntro1/imageIntro-1.jpeg'
import imag2 from './graphics/imageIntro1/imageIntro-2.jpeg'
import imag3 from './graphics/imageIntro1/imageIntro-3.jpeg'
import Boton from './btn-more/buttonMore'

export default class imageIntro extends Component {
    render() {
        return (
            <div>
                <div className = "imageIntroMain">
                    <div className = "mainDescription">
                        <br/>
                        <p className = 'descTit' >  
                         {this.props.tit}
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
                        <img src = {imag1}
                        className = 'imgIntro' alt = "img1" id = 'i1'/>
                    </a>
                    <a href = "Sitio del imagen">
                        <img src = {imag2}
                        className = 'imgIntro' alt = "img2" id = 'i2'/>
                    </a>
                    <a href = "Sitio del imagen">
                        <img src = {imag3}
                        className = 'imgIntro' alt = "img3" />
                    </a>
                    
                </div>
                <br/>
            </div>
        )
    }
}
