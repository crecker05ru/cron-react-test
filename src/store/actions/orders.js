import axios from 'axios'
import { response } from 'express'
import {Dispatch} from 'redux'

export const FETCH_ORDERS = 'FETCH_ORDERS'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
export const FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR'

export const fetchOrder = () => async (dispatch) => {
    try{
        dispatch({type:FETCH_ORDERS })
        const response = await axios.get("api/order")
        dispatch({type:FETCH_ORDERS_SUCCESS,payload: response.data})
    }catch(e){
        console.log(e)
        dispatch({type:FETCH_ORDER_ERROR,payload: response.data})
    }
}

