import React, { Component } from 'react'
/*Imported styles*/
import '../components/tittle-top/css/mainTittle.css';
import './App.css';

/* Imported components*/ 
import Navegation from '../components/side-nav/side-nav';
import MainLogo from '../components/main-logo/mainLogo';
import ButtonSocial from '../components/btn-socialMedia/socialMedia';
import TittleTop from '../components/tittle-top/mainTittle';
import SlideVideogame from '../components/slideVideogame/SlideVideogame';



export default class JumpBaller extends Component {
    render() {
        return (
            <div className = 'App'>
                <MainLogo></MainLogo>
                <Navegation
                    className="navBar"
                    tit="My work"
                    tit2='Products'
                    tit3='About Me '
                    subt1='My personal portafolio'
                    subt2='My working portafolio'
                    subt3='Contact me '
                />
                <br />
                <div className='rootImg'>
                    <SlideVideogame/>
                </div>
                <div className = 'socialbar'>
                    <ButtonSocial/>
                </div>
                
                <TittleTop className = "mainTittle" txt='Jump Baller'/>
                <br/>
                
            </div>

        )
    }
}
