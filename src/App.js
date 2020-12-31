import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import Form from "./components/Form";
import Landing from "./components/Landing";
import Timelinew from "./components/Timeline";

import Home_ch from "./components_ch/Home";
import Timeline_ch from "./components_ch/Timeline";
import Form_ch from "./components_ch/Form";

import{BrowserRouter as Router, Switch, Route }from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component = {Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route path="/timeline" component={Timelinew}/>
          <Route path="/form" component={Form}/>

          <Route path="/home_ch" component={Home_ch}/>
          <Route path="/timeline_ch" component={Timeline_ch}/>
          <Route path="/form_ch" component={Form_ch}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
