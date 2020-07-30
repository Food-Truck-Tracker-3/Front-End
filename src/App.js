import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';
import './App.css';



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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch> 
        </div>
      </div>
    </Router>
  );
};

export default App;
