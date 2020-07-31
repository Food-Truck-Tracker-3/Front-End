import {REGISTER_DINER, REGISTER_OPERATOR, REGISTER_START, FETCH_TRUCK_START, FETCH_TRUCK_SUCCESS, FETCH_OPERATOR_TRUCKS_START, FETCH_OPERATOR_TRUCKS_SUCCESS} from "../actions";

const initialState = {
    isLoading: false,
    data: "",
    error: ""
};

export const reducer = (state = initialState, action) => {
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

        case FETCH_TRUCK_START:
            return{
                ...state,
                isLoading: true,
            };
    
        case FETCH_TRUCK_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
                error: ""
            };

        case FETCH_OPERATOR_TRUCKS_START:
            return{
                ...state,
                isLoading: true,
            };
        
        case FETCH_OPERATOR_TRUCKS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
                error: ""
            };

        default: 
            return state;
    };
};







