import React from 'react';
import './App.css';
import './components/tittle-top/css/mainTittle.css';
import Home from './Home'
import JumpBaller from './JumpBaller';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Mywork from './MyWork';



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
      </Router>
    </div>
  );
}

export default App;
