import React, { Component } from 'react'

//Estilos
import './App.css';
import '../components/tittle-top/css/mainTittle.css';

//Compo
import Navegation from '../components/side-nav/side-nav';
import MainLogo from '../components/main-logo/mainLogo';
import ButtonSocial from '../components/btn-socialMedia/socialMedia';
import TittleTop from '../components/tittle-top/mainTittle';
import NavBarRes from '../components/nav-bar-responsive/navBarRes'

export default class AboutMe extends Component {
    render() {
        return (
            <div className = 'App'>
            <MainLogo></MainLogo>
            <Navegation
                className="navBar"
                tit="Donations"
                tit2='Curriculum'
                tit3='Work Together '
                subt1='Paypal or credit card'
                subt2='Work Expirience'
                subt3='Contact me'
                ref1 = ''
                ref2 = ''
                ref3 = ''
            />
            <br />
            <div className='rootImg'>
            </div>
            <div className = 'socialbar'>
                <ButtonSocial/>
            </div>
            
            <TittleTop className = "mainTittle" txt='ABOUT ME'/>
            <NavBarRes
            t1 = "Donations"
            t2 = 'Curriculum'
            t3 = 'Work Together '
            s1 ='Paypal or credit card'
            s2 = 'Work Expirience'
            s3 = 'Contact me'
            r1 = '/aboutme'
            r2 = 'aboutme'
            r3 = 'home'
            />
            <br/>
            
        </div>

        )
    }
}
