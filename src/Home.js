import React, { Component } from 'react'
import './App.css';
import Navegation from './components/side-nav/side-nav';
import MainLogo from './components/main-logo/mainLogo';
import SlideLong from './components/slide-long/slide-long';
import ButtonSocial from './components/btn-socialMedia/socialMedia';
import './components/tittle-top/css/mainTittle.css';
import TittleTop from './components/tittle-top/mainTittle';

export default class Home extends Component {
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
                <TittleTop
                    txt='NEWS & RECENT'
                />
                <br />
                <div className='rootImg'>
                    <SlideLong
                        tit='Movile Office'
                        des='3d design of a movile office, made in arnold '
                        date='22/09/19'
                        src1='../graphics/slide-long/imageIntro-1.jpeg'
                    />
                </div>
                <div className='rootImg'>
                    <SlideLong
                        tit='Titulo'
                        des='Description'
                        date='Date'
                    />
                </div>
                <ButtonSocial />
            </div>
        )
    }
}
