import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import Form from "./components/Form";
import Landing from "./components/Landing";
import Timelinew from "./components/Timeline";
import UserContext from "./context/userContext";
import Axios from "axios"; 



// import auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import{BrowserRouter as Router, Switch, Route }from 'react-router-dom';



function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
     const checkLoggedIn = async () => {
       let token = localStorage.getItem("auth-token");
       if (token === null){
         localStorage.setItem("auth-token", "");
         token = "";
       }
       const tokenResponse = await Axios.post("http://localhost:5000/users/tokenIsValid", null, 
       {headers: {"x-auth-token": token}});
       if (tokenResponse.data){
         const userResponse = await Axios.get("http://localhost:5000/users/", 
         {headers: {"x-auth-token": token},
        });
        setUserData({
          token,
          user: userResponse.data,
        })
       }
     };

     checkLoggedIn();
  }, []);
  return (

    <Router>
      <UserContext.Provider value = {{userData, setUserData}}>
        <div className="App">
  
          <Switch>
            <Route path="/" exact component = {Landing}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Route path="/timeline" component={Timelinew}/>
            <Route path="/form" component={Form}/>
            
            {/* 
            <Route path="/home_ch" component={Home_ch}/>
            <Route path="/timeline_ch" component={Timeline_ch}/>
            <Route path="/form_ch" component={Form_ch}/> 
            */}
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
