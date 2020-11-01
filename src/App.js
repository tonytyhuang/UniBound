import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';

import{BrowserRouter as Router, Switch, Route }from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route path="/about" component={About}/>
        <Route path="/home" component={Home}/>
        
        
      </div>
    </Router>
  );
}

export default App;
