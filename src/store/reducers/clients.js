import { FETCH_CLIENTS,FETCH_CLIENTS_SUCCESS,FETCH_CLIENTS_ERROR } from "../constants/clientsConstants"

const initialState = {
    clients:[],
    loading: false,
    error: null
}

export const clientsReducer = (state= initialState,action) => {
    switch (action.type){
        case FETCH_CLIENTS:
            return {...state,loading: true, error: null, clients:[]}
        case FETCH_CLIENTS_SUCCESS:
            return {...state,loading: false, error: null, clients:action.payload}
        case FETCH_CLIENTS_ERROR:
            return {...state,loading: false, error: action.payload, clients:[]} 
        default: 
        return state
    }
}