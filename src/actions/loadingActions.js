import { 
    SET_LOADING
} from "../types";


export function setLoading(estado) {
    return async (dispatch) => {
        dispatch( setIsLoading(estado) );
    }
}

const setIsLoading = estado => ({
    type: SET_LOADING,
    payload: estado
})