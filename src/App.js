import React from 'react';
import './App.css';
import './components/tittle-top/css/mainTittle.css';
import Home from './Home'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Mywork from './MyWork';



function App() {
  return (
    <div className = "App">
      <Router>
        <Switch>
            <Route path = "/Home" render={
              () =>{
                return (<Home></Home>);
              }

            } />
        </Switch>
        <Switch>
              <Route path = "/MyWork" render={
              () =>{
                return (<Mywork></Mywork>);
              }

            } /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
