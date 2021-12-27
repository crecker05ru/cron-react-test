import { FETCH_ORDERS,FETCH_ORDERS_SUCCESS,FETCH_ORDER_ERROR } from "../constants/ordersConstants"

const initialState = {
    orders:[],
    loading: false,
    error: null
}

export const ordersReducer = (state= initialState,action) => {
    switch (action.type){
        case FETCH_ORDERS:
            return {...state,loading: true, error: null, orders:[]}
        case FETCH_ORDERS_SUCCESS:
            return {...state,loading: true, error: null, orders:action.payload}
        case FETCH_ORDER_ERROR:
            return {...state,loading: false, error: action.payload, orders:[]} 
        default: 
        return state
    }
}