import {axiosWithAuth} from "../../utils/axiosWithAuth";


export const LOGIN = "LOGIN";
export const LOGIN_START ="LOGIN_START";
export const CREATE_DINER_ACCOUNT = "CREATE_DINER_ACCOUNT";
export const CREATE_OPERATOR_ACCOUNT = "CREATE_OPERATOR_ACCOUNT";
export const REGISTER_START = "REGISTER_START";

export const login = user => {
    return dispatch => {
        dispatch({type: LOGIN_START});

        axiosWithAuth()
            .post("/api/auth/login", user)
            .then(res => {
                console.log(res);
                dispatch({type: LOGIN, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};

export const registerDiner = diner => {
    return dispatch => {
        dispatch({type: REGISTER_START});

        axiosWithAuth()
            .post("/api/auth/register-diner", diner)
            .then(res => {
                console.log(res);
                dispatch({type: CREATE_DINER_ACCOUNT, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};

export const registerOperator = operator => {
    return dispatch => {
        dispatch({type: REGISTER_START});

        axiosWithAuth()
            .post("/api/auth/register-operator", operator)
            .then(res => {
                console.log(res);
                dispatch({type: CREATE_OPERATOR_ACCOUNT, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};
