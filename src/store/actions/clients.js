import { FETCH_CLIENTS,FETCH_CLIENTS_SUCCESS,FETCH_CLIENTS_ERROR } from "../constants/clientsConstants"
import axios from 'axios'
import {Dispatch} from 'redux'




export const fetchClients = () => async (dispatch) => {
    try{
        dispatch({type:FETCH_CLIENTS })
        const response = await axios.get('/db/clients.json')
        dispatch({type:FETCH_CLIENTS_SUCCESS,payload: response.data})
        console.log(response.data,"response.data")
    }catch(e){
        console.log(e)
        dispatch({type:FETCH_CLIENTS_ERROR,payload: "error"})
    }
}


