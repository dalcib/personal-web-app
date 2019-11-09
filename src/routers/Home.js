import React, { Component } from 'react'

/*Imported styles*/
import '../components/tittle-top/css/mainTittle.css';



/* Imported components*/ 
import Navegation from '../components/side-nav/side-nav';
import MainLogo from '../components/main-logo/mainLogo';
import SlideLong from '../components/slide-long/slide-long';
import ButtonSocial from '../components/btn-socialMedia/socialMedia';
import TittleTop from '../components/tittle-top/mainTittle';
import NavRes from '../components/nav-bar-responsive/navBarRes';


export default class Home extends Component {
    render() {
        return (
            <div className = 'App'>
                <TittleTop className = "mainTittle" txt='NEWS & RECENT'/>   
                <MainLogo></MainLogo>
                <NavRes className = 'navRes'
                       t1="My work"
                       t2='Products'
                       t3='About Me '
                       s1='My personal portafolio'
                       s2='My working portafolio'
                       s3='Contact me '
                       r1 = '/MyWork'
                       r2 = '/products'
                       r3 = '/aboutMe'
                />
                <Navegation
                    className="navBar"
                    tit="My work"
                    tit2='Products'
                    tit3='About Me '
                    subt1='My personal portafolio'
                    subt2='My working portafolio'
                    subt3='Contact me '
                    ref1 = '/MyWork'
                    ref2 = '/products'
                    ref3 = '/aboutMe'
                />
                <br />
                <div className='rootImg'>
                    <SlideLong/>
                </div>
                <div className = 'socialbar'>
                    <ButtonSocial/>
                </div>
                
                
               
           

                
            </div>

        )
    }
}
