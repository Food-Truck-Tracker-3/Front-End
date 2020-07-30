import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';
import User from "./components/User";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';



function App() {

  const [userData, setUserData] = useState({
    username: "",
    role: "",
    email: "",
    id: 0
  });

  

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
            <PrivateRoute
              exact
              path="/user/:id"
            >
              <User user={userData}/>
            </PrivateRoute>
               

            <Route 
              path="/login" 
              render={props => <Login {...props} setUserData={setUserData}/>}
            />
            <Route path="/register" component={Register} />
      
          </Switch> 
        </div>
      </div>
    </Router>
  );
};

export default App;
