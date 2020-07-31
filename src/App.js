import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';
import Operator from "./components/Operator/Operator";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import '../src/components/components.css'


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
        <Header userData={userData} />
        <div className="register-container">
        
          <Switch>
            <PrivateRoute exact path="/user/:id">
              <Operator user={userData}/>
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
