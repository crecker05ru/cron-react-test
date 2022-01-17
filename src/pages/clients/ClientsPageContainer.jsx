import { Layout,Col,Row,Button,Divider,Input} from 'antd';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useEffect} from 'react'
import ClientsPage from './ClientsPage';

export default function ClientsPageContainer (){
    let params = useParams();
    const {clients,loading} = useSelector(state => state.clients)
    const {fetchClients} = useActions()
    const {clientId} = params
    let currentClient = clients.filter(c => c.id == clientId)
    console.log('params',clientId)

    useEffect(() => {
        fetchClients()
    },[])

    return (
        <>
        {loading ? <h1>Loading</h1> :  <ClientsPage client={currentClient} />}
        </>
    )
}