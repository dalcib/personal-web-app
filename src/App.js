import React from 'react';
import './App.css';
import './components/tittle-top/css/mainTittle.css';
import Home from './routers/Home'
import JumpBaller from './routers/JumpBaller';
import Mywork from './routers/MyWork';
import AboutMe from './routers/AboutMe'


import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';



function App() {
  return (
    <div className = "App">
      <Router>
        <Switch>
            <Route path = "/" exact render={
              () =>{
                return (<Home></Home>);
              }

            } />
        </Switch>
        <Switch>
              <Route path = "/MyWork" exact render={
              () =>{
                return (<Mywork></Mywork>);
              }

            } /> 
        </Switch>
        <Switch>
              <Route path = "/JumpBaller" exact render={
              () =>{
                return (<JumpBaller></JumpBaller>);
              }

            } /> 
        </Switch>
        <Switch>
              <Route path = "/Home" exact render={
              () =>{
                return (<Home></Home>);
              }

            } /> 
        </Switch>
        <Switch>
            <Route 
            path= "/AboutMe" exact render = {
              ()=>{
                return (<AboutMe></AboutMe>)

              }


            }
            />


        </Switch>

      </Router>
    </div>
  );
}

export default App;
