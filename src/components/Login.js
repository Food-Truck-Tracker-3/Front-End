import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {login} from "../store/actions";
import {useHistory} from "react-router-dom";
import './components.css'

const initialValues = {
    username: "",
    password: ""
};

const Login = props => {
  const {push} = useHistory();

    const [values, setValues] = useState(initialValues);

    const handleSubmit = e => {
        e.preventDefault();
        props.login(values).then(res => {
          push(`/`);
        });
        
    };

    


    const handleChanges = e => {
      setValues({...values,
          [e.target.name]: e.target.value
      });
    };

    return (
          <div className='login-container'>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChanges}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChanges}
              />
              <br />
              <button className="button">Log in</button>
            </form>
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
    {login}
)(Login);