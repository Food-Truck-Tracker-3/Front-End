import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import User from "./components/User";
import Search from "../src/components/Diner/Search"



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="register-container">
          <div className='links'>
            <Link className='link' to="/login">Login</Link>
            <Link className='link' to="/register">Register</Link>
          </div>
        
          <Switch>
            <PrivateRoute exact path="/user/:id" component={User}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch> 
        </div>
      </div>
      <Search />
    </Router>
  );
};

export default App;
