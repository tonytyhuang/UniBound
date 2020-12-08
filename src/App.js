import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import Form from "./components/Form";
import Landing from "./components/Landing";

import{BrowserRouter as Router, Switch, Route }from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/" exact component = {Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/home" component={Home}/>

          <Route path="/form" component={Form}/>

        
        
      </div>
    </Router>
  );
}

export default App;
