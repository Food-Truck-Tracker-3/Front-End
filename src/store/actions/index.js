import {axiosWithAuth} from "../../utils/axiosWithAuth";


export const LOGIN = "LOGIN";
export const LOGIN_START ="LOGIN_START";
export const REGISTER_DINER = "REGISTER_DINER";
export const REGISTER_OPERATOR = "REGISTER_OPERATOR";
export const REGISTER_START = "REGISTER_START";


export const login = user => {
    return dispatch => {
        dispatch({type: LOGIN_START});

        axiosWithAuth()
            .post("/api/api/auth/login", user)
            .then(res => {
                console.log(res);
                dispatch({type: LOGIN, payload: res.data});
                // if(res.data.role === "diner"){
                //     // window.history.push(`/diner/${res.data.id}`);
                // } else {
                //     // window.history.push(`operator/${res.data.id}`);
                // };
            })
            .catch(err => console.log(err));
    };
};

export const registerDiner = diner => {
    return dispatch => {
        dispatch({type: REGISTER_START});

        axiosWithAuth()
            .post("/api/api/auth/register-diner", diner)
            .then(res => {
                console.log(res);
                dispatch({type: REGISTER_DINER, payload: res.data})
                // window.history.push(`/diner/${res.data.id}`);
            })
            .catch(err => console.log(err));
    };
};

export const registerOperator = operator => {
    return dispatch => {
        dispatch({type: REGISTER_START});

        axiosWithAuth()
            .post("/api/api/auth/register-operator", operator)
            .then(res => {
                console.log(res);
                dispatch({type: REGISTER_OPERATOR, payload: res.data})
                // window.history.push(`/operator/${res.data.id}`);
            })
            .catch(err => console.log(err));
    };
};
