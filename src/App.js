import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Diner from "./components/Diner";
import Operator from "./components/Operator";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import './App.css';

function App() {

  axios.get("https://foodtruck-backend-3.herokuapp.com/api/oleg")
  .then(function(response)
    {
      console.log(response)
    })
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        
        <Switch>
          <PrivateRoute exact path="/operator/:id" component={Operator}/>
          <Route path="/login" component={Login} />
       
          <PrivateRoute exact path="/diner/:id" component={Diner}/>
          <Route path="/register" component={Register} />
         
        </Switch>
        
      </div>
    </Router>
  );
};

export default App;
