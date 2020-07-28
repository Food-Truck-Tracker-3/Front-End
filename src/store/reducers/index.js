import {LOGIN, CREATE_DINER_ACCOUNT, CREATE_OPERATOR_ACCOUNT, REGISTER_START, LOGIN_START} from "../actions";
import {combineReducers} from "redux";


initialLoginState = {
    isLoading: false,
    userInfo: {},
    error: "Wrong username or password!"
};

initialRegisterState = {
    isLoading: false,
    userInfo: {},
    error: ""
};


const loginReducer = (state = initialLoginState, action) => {
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                isLoading: true
            };
        case LOGIN:
            return{
                ...state,
                isLoading:false,
                userInfo: action.payload,
                error: ""
            };
    };
};

const registerReducer = (state = initialRegisterState, action) => {
    switch(action.type){
        case REGISTER_START: 
            return{
                ...state,
                isLoading: true
            };
        case CREATE_DINER_ACCOUNT: 
            return{
                ...state,
                isLoading: false,
                userInfo: action.payload,
                error: ""
            };
        case CREATE_OPERATOR_ACCOUNT:
            return{
                ...state,
                isLoading: false,
                userInfo: action.payload,
                error: ""
            };
    };
};



export default combineReducers({
    loginReducer,
    registerReducer
});



