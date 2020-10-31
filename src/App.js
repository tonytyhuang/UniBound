import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import{BrowserRouter as Router, Switch, Route }from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
    
      
      <h1>UniBound tony peepee pppp poopoo</h1>
    </div>
    <Switch>
      <Route path = '/' exact />
    </Switch>
    </Router>
  );
}

export default App;
