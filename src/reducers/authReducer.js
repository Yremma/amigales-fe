import { 
    GET_USER_DATA, 
    GET_USER_DATA_ERROR, 
    GET_USER_DATA_SUCCESS 
} from '../types';


//Inicializo el state
const initialState = {
    error: null,
    loading: false,
    user: null
}


export default function authReducer (state = initialState, action) {
    switch(action.type){
        case GET_USER_DATA:
            return {
                ...state,
                loading: true
            }
        case GET_USER_DATA_SUCCESS:
            return {
                ...state,                
                error: null,
                loading: false,
                user: action.payload,
            }
        case GET_USER_DATA_ERROR:
            return {
                ...state,                
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}