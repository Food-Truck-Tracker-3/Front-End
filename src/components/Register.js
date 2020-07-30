import React from 'react';
import {Route, Switch, Link } from "react-router-dom";
import RegisterDiner from "./RegisterDiner";
import RegisterOperator from "./RegisterOperator";

const Register = () => {
  return (
    <div>
      <p>Create your account. It's free and only takes a minute.</p>
      <div className="links">
      <Link className='link' to="/register/diner">Register Diner</Link>
      <Link className='link' to="/register/operator">Register Operator</Link>
      </div>
      
      <Switch>
        <Route path="/register/diner" component={RegisterDiner} />
        <Route path="/register/operator" component={RegisterOperator} />
      </Switch>
    </div>
  );
};

export default Register;