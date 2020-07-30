import {LOGIN, REGISTER_DINER, REGISTER_OPERATOR, REGISTER_START, LOGIN_START, FETCH_TRUCKS_START, FETCH_TRUCKS_SUCCESS, ADD_TRUCK, DELETE_TRUCK, EDIT_TRUCK} from "../actions";


const initialState = {
    isLoading: false,
    data: "",
    error: ""
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
                data: action.payload,
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
                data: action.payload,
                error: ""
            };
        case REGISTER_OPERATOR:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
                error: ""
            };

        case FETCH_TRUCKS_START:
            return{
                ...state,
                isLoading: true,
            };

        case FETCH_TRUCKS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
                error: ""
            };

        case ADD_TRUCK:
            return{
                ...state,
                data: action.payload,
            };

        case EDIT_TRUCK:
            return{
                ...state,
                data: action.payload,
            };

        case DELETE_TRUCK:
            return{
                ...state,
                data: action.payload
            }
        
        
            
        default: 
            return state;
    };
};







