import {axiosWithAuth} from "../../utils/axiosWithAuth";

export const REGISTER_DINER = "REGISTER_DINER";
export const REGISTER_OPERATOR = "REGISTER_OPERATOR";
export const REGISTER_START = "REGISTER_START";
export const FETCH_OPERATOR_TRUCKS_START = "FETCH_OPERATOR_TRUCKS_START";
export const FETCH_TRUCK_START = "FETCH_TRUCK_START";
export const FETCH_OPERATOR_TRUCKS_SUCCESS = "FETCH_OPERATOR_TRUCKS_SUCCESS";
export const FETCH_TRUCK_SUCCESS = "FETCH_TRUCK_SUCCESS";




export const fetchTruck = truckId => {
    return dispatch => {
        dispatch({type: FETCH_TRUCK_START});

        axiosWithAuth()
            .get(`/api/operators/trucks/${truckId}`)
            .then(res => {
                console.log(res);
                dispatch({type: FETCH_TRUCK_SUCCESS, payload: res.data});
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    };
};

export const fetchOperatorTrucks = operatorId => {
    return dispatch => {
        dispatch({type: FETCH_OPERATOR_TRUCKS_START});

        axiosWithAuth()
            .get(`/api/operators/trucks/${operatorId}/user`)
            .then(res => {
                console.log(res);
                dispatch({type: FETCH_OPERATOR_TRUCKS_SUCCESS, payload: res.data});
                localStorage.setItem("token", res.data.token);
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
                dispatch({type: REGISTER_DINER, payload: res.data})
                localStorage.setItem("token", res.token);
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
                dispatch({type: REGISTER_OPERATOR, payload: res.data})
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    };
};
