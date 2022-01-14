import { FETCH_ORDERS,FETCH_ORDERS_SUCCESS,FETCH_ORDER_ERROR } from "../constants/ordersConstants"
import axios from 'axios'
import {Dispatch} from 'redux'




export const fetchOrders = () => async (dispatch) => {
    try{
        dispatch({type:FETCH_ORDERS })
        const response = await axios.get('./db/orders.json')
        dispatch({type:FETCH_ORDERS_SUCCESS,payload: response.data})
        console.log(response.data,"response.data")
    }catch(e){
        console.log(e)
        dispatch({type:FETCH_ORDER_ERROR,payload: "error"})
    }
}
export const changeOrderStatus = (id,orderStatus) => async (dispatch) => {
    try{
        dispatch({type:FETCH_ORDERS })
         const response = await axios.get('./db/orders.json')
         const requestedOrder = response.data.filter(item => item.id == id)
         requestedOrder.orderStatus = orderStatus
         dispatch({type:FETCH_ORDERS_SUCCESS,payload: response.data})
        console.log(response.data)
        fetchOrders()
    }catch(e){
        console.log(e)
        dispatch({type:FETCH_ORDER_ERROR,payload: "error"})
    }
}

