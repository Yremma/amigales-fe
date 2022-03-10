import { 
    GET_USER_DATA, 
    GET_USER_DATA_ERROR, 
    GET_USER_DATA_SUCCESS 
} from "../types";

import apiAuth      from '../helpers/apiAuth';
import apiMethods   from "../constants/apiMethods";
import routes       from "../constants/routes";
import es           from "../lang/es";


// Get user data
export function getUserDataAction(history) {
    return async (dispatch) => {
        // Inicio la ejecución
        dispatch( getUserData() );
        // Ejecuto la consutla
        try
        {   // Query
            const response = await apiAuth.get(apiMethods.USER_DATA);
            // Llamo al success
            dispatch( getUserDataSuccess(response.data) );
            // Me fijo si hay history
            if(history)
            {   // Debo redireccionar al inicio directamente
                history.push(routes.HOME);
            }
        }
        catch(error)
        {   const response = error.response;
            let data = {
                data: null,
                message: es.ERRORS.GENERAL
            };
            // Verifico si hay error
            if(response)
            {   data = response.data;
            }
            // Llamo al dispatch
            dispatch( getUserDataError(data) );
        }
    }
}

const getUserData = () => ({
    type: GET_USER_DATA,
})

const getUserDataSuccess = user => ({
    type: GET_USER_DATA_SUCCESS,
    payload: user
})

const getUserDataError = error => ({
    type: GET_USER_DATA_ERROR,
    payload: error
})