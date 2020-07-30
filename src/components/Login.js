import React, {useState} from "react";
import {connect} from "react-redux";
import {login} from "../store/actions";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import './components.css'
import Operator from "./Operator/Operator";
import Diner from "./Diner/Diner";

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
          console.log(res);
          push(`/user/${props.data.id}`);
        });
        setValues(initialValues);
    };

    const handleChanges = e => {
      setValues({...values,
          [e.target.name]: e.target.value
      });
    };

    return (
      <Router>
        <div className='login-container'>
          <form onSubmit={handleSubmit}>
            <input
              className="input-2"
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChanges}
            />
            <br />
            <input
              className="input-2"
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
        <Switch>
          <PrivateRoute exact path="/user/:id" component={Operator}/>
          <PrivateRoute exact path="/user/:id" component={Diner}/>
        </Switch>
      </Router>
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