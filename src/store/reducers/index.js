import {combineReducers} from 'redux'
import { ordersReducer} from './orders'
import {clientsReducer} from './clients'

export const rootReducer = combineReducers({
    orders: ordersReducer,
    clients: clientsReducer
})