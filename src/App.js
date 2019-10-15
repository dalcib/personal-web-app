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
            <Route path = "/Home" >
                <Home></Home>
            </Route>
            <Route exact path = '/MyWork'>
                <Mywork></Mywork>
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
