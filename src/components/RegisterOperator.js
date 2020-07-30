import React, { useState } from 'react';
import { connect } from "react-redux";
import { registerOperator } from "../store/actions";
import './components.css';


const initialValues = {
  role: 'operator',
  username: '',
  email: '',
  password: '',
  checkbox: false
};

function RegisterOperator(props) {

  const [formValues, setValues] = useState(initialValues);


  const updateForm = (inputName, inputValue) => {
    const updatedValues = { ...formValues, [inputName]: inputValue };
    setValues(updatedValues);
  };

  const onChange = evt => {

    let  name = evt.target.name;
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
    props.registerOperator(formValues);
    setValues(initialValues);
  };

  return (
    <div className='login-container'>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input">
          <input
            name='username'
            type='text'
            placeholder='Enter Name'
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
            placeholder='Enter Email'

            value={formValues.email}
            onChange={onChange}
          />
        </div>

        <div className="input">
          <input
            name='password'
            type='password'
            placeholder='Enter password'
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


          <p>I accept the Terms of Use & Privacy Policy.</p>
        </div>

        <button disabled={!formValues.username || !formValues.email || !formValues.checkbox || !formValues.password}
          className='register, button'> Register Now</button>
      </form>
      {props.data && <h3>{props.data.message}</h3>}
    </div>    

  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { registerOperator }
)(RegisterOperator);