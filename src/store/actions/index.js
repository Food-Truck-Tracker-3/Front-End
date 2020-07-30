import {axiosWithAuth} from "../../utils/axiosWithAuth";

export const REGISTER_DINER = "REGISTER_DINER";
export const REGISTER_OPERATOR = "REGISTER_OPERATOR";
export const REGISTER_START = "REGISTER_START";
export const FETCH_TRUCKS_START = "FETCH_TRUCKS_START";
export const FETCH_TRUCKS_SUCCESS = "FETCH_TRUCKS_SUCCESS";
export const ADD_TRUCK = "ADD_TRUCK";
export const EDIT_TRUCK = "EDIT_TRUCK";
export const DELETE_TRUCK = "DELETE_TRUCK";

export const fetchTrucks = () => {
    return dispatch => {
        dispatch({type: FETCH_TRUCKS_START});

        axiosWithAuth()
            .get("/api/operators/trucks")
            .then(res => {
                console.log(res);
                dispatch({type: FETCH_TRUCKS_SUCCESS, payload: res.data});
            })
            .catch(err => console.log(err));
    };
};

export const addTruck = truck => {
    return dispatch => {
        axiosWithAuth()
            .post("/api/operators/trucks", truck)
            .then(res => {
                console.log(res);
                dispatch({type: ADD_TRUCK, payload: res.data});
            })
            .catch(err => console.log(err));
    };
};

export const editTruck = truck => {
    return dispatch => {
        axiosWithAuth()
            .put(`/api/operators/trucks/${truck.id}`, truck)
            .then(res => {
                console.log(res);
                dispatch({type: ADD_TRUCK, payload: res.data});
            })
            .catch(err => console.log(err));
    };
};

export const deleteTruck = truck => {
    return dispatch => {
        axiosWithAuth()
            .delete(`/api/operators/trucks/${truck.id}`, truck)
            .then(res => {
                console.log(res);
                dispatch({type: ADD_TRUCK, payload: res.data});
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
                // localStorage.setItem("token", res.data.token);
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
                // localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    };
};
