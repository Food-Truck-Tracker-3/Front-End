import React, {useState} from "react";
import {connect} from "react-redux";
import {login} from "../store/actions";

const initialValues = {
    username: "",
    password: ""
};


const Login = props => {

    const [values, setValues] = useState(initialValues);

    const handleSubmit = e => {
        e.preventDefault();
        props.login(values);
        setValues(initialValues);
        console.log(props.state);
    };

    const handleChanges = e => {
      setValues({...values,
          [e.target.name]: e.target.value
      });
    };


    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChanges}
            />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChanges}
            />
            <button>Log in</button>
          </form>
        </div>
      );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        userInfo: state.userInfo,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {login}
)(Login);