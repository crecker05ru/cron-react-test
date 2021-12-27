import Orders from "./Orders";
import {useEffect} from 'react'
import { useActions } from '../../hooks/useActions';
import {useSelector} from 'react-redux'
export default function OrdersContainer (){
    const {orders} = useSelector(state => state.orders)
    console.log('state',orders)
    const {fetchOrders} = useActions()

    useEffect(() => {
        const fetch = () => {
            console.log('before')
            fetchOrders()
            console.log('after')
          }
          fetch()
        return () => {
        }
    }, [])

    
    return (
        <>
       <Orders/>
        </>
        
    )
}