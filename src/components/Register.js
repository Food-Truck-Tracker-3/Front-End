<<<<<<< HEAD
import React, { useState } from 'react';
import { connect } from "react-redux";
import { registerDiner, registerOperator } from "../store/actions";
import { useHistory } from "react-router-dom";
import './components.css';


const initialValues = {
  role: '',
  username: '',
  email: '',
  password: '',
  checkbox: false
};

function Register(props) {

  const { push } = useHistory();

  const [formValues, setValues] = useState(initialValues);


  const updateForm = (inputName, inputValue) => {
    const updatedValues = { ...formValues, [inputName]: inputValue };
    setValues(updatedValues);
  };

  const onChange = evt => {

    let name = evt.target.name;
    let value;

    if (evt.target.type === "checkbox") {
      value = evt.target.checked
    } else {
      value = evt.target.value
    };
    updateForm(name, value);
    ;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formValues.role === "diner") {
      props.registerDiner(formValues);
    } else {
      props.registerOperator(formValues);
    }
    setValues(initialValues);

  };



=======
import React from 'react';
import {Route, Switch, Link } from "react-router-dom";
import RegisterDiner from "./RegisterDiner";
import RegisterOperator from "./RegisterOperator";
>>>>>>> origin/master

const Register = () => {
  return (
<<<<<<< HEAD
    <div className='login-container'>
      <form className="register-form" onSubmit={handleSubmit}>
        <p className='register-text'>Create your account. It's free and only takes a minute.</p>

        <div className="checkbox-container">
          <div onChange={onChange}
            id="radio"
            className="radio">
            <input type="radio" value="diner" name="role" /> Customer
          </div>
          <div className="radio">
            <input type="radio" value="owner" name="role" /> Owner
        </div>
        </div>

        <div className="input">
          <input
            name='username'
            type='text'
            placeholder='Your name...'
            maxLength='18'
            minLength='2'
            value={formValues.username}
            onChange={onChange}
          />

        </div>

        <div className="input">
          <input
            name='email'
            type='email'
            placeholder='Your email...'
            value={formValues.email}
            onChange={onChange}
          />
        </div>

        <div className="input">
          <input
            name='password'
            type='password'
            placeholder='Your password...'
            maxLength='18'
            minLength='4'
            value={formValues.password}
            onChange={onChange}
          />
        </div>

        <div className='checkbox'>
          <input
            type='checkbox'
            name='checkbox'
            onChange={onChange}
          />


          <p className='register-text'>I accept the Terms of Use & Privacy Policy.</p>
        </div>

        <button disabled={!formValues.role || !formValues.username || !formValues.email || !formValues.checkbox || !formValues.password}
          className='register, button'> Register Now</button>
      </form>
      {props.data && <h3>{props.data.message}</h3>}
    </div>

=======
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
>>>>>>> origin/master
  );
};

export default Register;