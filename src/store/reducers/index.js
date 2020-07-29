import {LOGIN, REGISTER_DINER, REGISTER_OPERATOR, REGISTER_START, LOGIN_START} from "../actions";


const initialState = {
    isLoading: false,
    userInfo: "",
    error: "Wrong username or password!"
};




export const reducer = (state = initialState, action) => {
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
        
        case REGISTER_START: 
            return{
                ...state,
                isLoading: true
            };
        case REGISTER_DINER: 
            return{
                ...state,
                isLoading: false,
                userInfo: action.payload,
                error: ""
            };
        case REGISTER_OPERATOR:
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







