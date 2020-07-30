import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import './components.css'

const initialValues = {
    username: "",
    password: ""
};

const Login = ({setUserData}) => {
    const {push} = useHistory();

    const [values, setValues] = useState(initialValues);

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("api/auth/login", values)
          .then(res => {
            localStorage.setItem("token", res.data.token);
            setUserData(res.data.data);
            push(`/user/${res.data.data.id}`);
          })
          .catch(err => console.log(err));
    };

    const handleChanges = e => {
      setValues({...values,
          [e.target.name]: e.target.value
      });
    };

    return (
      <div>
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
      </div>
    );
};

export default Login;