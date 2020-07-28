import {LOGIN, REGISTER_DINER, REGISTER_OPERATOR, REGISTER_START, LOGIN_START} from "../actions";
import {combineReducers} from "redux";


const initialLoginState = {
    isLoading: false,
    message: "",
    error: "Wrong username or password!"
};

const initialRegisterState = {
    isLoading: false,
    message: "",
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
                isLoading: false,
                userInfo: action.payload,
                error: ""
            };

        default: 
            return state;
    };
};

const registerReducer = (state = initialRegisterState, action) => {
    switch(action.type){
        case REGISTER_START: 
            return{
                ...state,
                isLoading: true
            };
        case REGISTER_DINER: 
            return{
                ...state,
                isLoading: false,
                message: action.payload,
                error: ""
            };
        case REGISTER_OPERATOR:
            return{
                ...state,
                isLoading: false,
                message: action.payload,
                error: ""
            };
            
        default: 
            return state;
    };
};



export default combineReducers({
    loginReducer,
    registerReducer
});



