import React from 'react';
import {Route, Switch, Link } from "react-router-dom";
import RegisterDiner from "./RegisterDiner";
import RegisterOperator from "./RegisterOperator";

const Register = () => {
  return (
    <div className='register-form'>
      <div className="links">
      <Link className='link' to="/register/diner">Diner</Link>
      <Link className='link' to="/register/operator">Operator</Link>
      </div>
      
      <Switch>
        <Route path="/register/diner" component={RegisterDiner} />
        <Route path="/register/operator" component={RegisterOperator} />
      </Switch>
    </div>
  );
};

export default Register;