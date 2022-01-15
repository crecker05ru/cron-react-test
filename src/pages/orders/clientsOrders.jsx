import { Layout, Col,Row,Button,Divider,Input,Badge } from 'antd';
import OrderDetails from './orderDetails';
import {useSelector} from 'react-redux'
import OrderCard from './orderCard';
import { useActions } from '../../hooks/useActions';
import {useState,useEffect,useMemo} from 'react'
const {Content } = Layout;
const {Search} = Input;
export default function ClientsOrders (){
    const {orders,loading} = useSelector(state => state.orders)
    const [clientsOrders,setClientOrders] = useState([...orders])
    const [orderCardDescription,setOrderCardDescription] = useState(null)
    const [searchQuery,setSearchQuery] = useState('')
    const [selected,setSelected] = useState(false)
    const [allOrders,setAllOrders] = useState(orders)
    const [acceptedOrders,setAcceptedOrders] = useState(null)
    const [prepairingOrders,setPrepairingOrders] = useState(null)
    const [onWayOrders,setOnWayOrders] = useState(null)
    const [acceptedOrdersCount,setAcceptedOrdersCount] = useState(0)
    console.log('clientsOrders',clientsOrders)
    
    const changeOrderStatus = (id,orderStatus) => {
        const updatedOrders = [...orders]
        const requestedOrder = orders.filter(item => item.id == id)
        requestedOrder.orderStatus = orderStatus
        [updatedOrders] = requestedOrder 
        setClientOrders(updatedOrders)
        console.log('orders',orders)
        console.log("changeOrderStatus",requestedOrder)
    }

    useEffect(()=>{
        if(orders){
            setAllOrders(orders)
        }
    },[clientsOrders])

    useEffect(()=>{
        if(orders){
            const acceptedOrders = [...orders].filter(item => item.orderStatus.isUnaccepted == true)
            setAcceptedOrders(acceptedOrders)
        }
    },[clientsOrders])

    useEffect(()=>{
        if(orders){
            const onWayOrders = [...orders].filter(item => item.orderStatus.isOnWay == true)
            setOnWayOrders(onWayOrders)
        }
    },[clientsOrders])

    useEffect(()=>{
        if(orders){
            const prepairingOrders = [...orders].filter(item => item.orderStatus.isPrepairing == true)
            setPrepairingOrders(prepairingOrders)
        }
    },[clientsOrders])
    

    console.log(acceptedOrders)
    // useEffect(()=>{
    //     if(clientsOrders){
    //         const acceptedOrdersCount = clientsOrders.reduce((accum,item) => accum + (item.orderStatus.isUnaccepted ? 1 : 0), 0 )
    //         setAcceptedOrdersCount(acceptedOrdersCount)
    //     }
    // })
    console.log(acceptedOrdersCount)
    
    const setDescription  = (order) => {
        setSelected(true)
     setOrderCardDescription(order)
    }

    const searchedOrders = useMemo(()=> {
        return clientsOrders.filter(order => order.date.includes(searchQuery.toLowerCase()))
    },[searchQuery,clientsOrders])

    useEffect(() => {
        setClientOrders(orders)
        if(!selected){
            setOrderCardDescription(orders[0])
        }
        
    },[orders])
    // const defaultCard = () => {
    //     setOrderCardDescription(orders[0])
    //     console.log('orderCardDescription',orderCardDescription)
    // }
    // useEffect(()=> {
    //     setTimeout(defaultCard, 500);
    // },[])

    
     

    
    return (
        <Layout >
        <Content
        className=" white inner-shadow "
        style={{
            margin: 0,
            minHeight: 70,
            padding:15
        }}
        >
            <h2>Заказы клиентов</h2>
            <Row justify='start' gutter={10}>
                <Col > <a href="/" className="text-decoration-none">В работе</a></Col>
                <Col ><a href="/" className="text-decoration-none">Все заказы</a></Col>
            </Row>
        </Content>
        <Layout style={{ padding: '0 20px 20px' }}>
        <Content 
        className="site-layout-background main-layout"
        >
       
        <Row justify='start' wrap={false}  gutter={10}>
            <Col flex="330px" >
            <Content
            className="site-layout-background white"
        >
                <Search
                placeholder="Поиск по дате"
                allowClear 
                className='border-radius-20 padding-10' 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Row justify='space-between' className='padding-10 ' gutter={5}>
                <Badge count={orders.length}>
                    <Button onClick={() => setClientOrders(allOrders)} type="primary" size="small" >
                     Все
                    </Button> 
                </Badge>
                
            
            <Badge count={ acceptedOrders ? acceptedOrders.length : null}>
                <Button size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => setClientOrders(acceptedOrders)}>Непринятые</Button>
            </Badge>
                
            <Badge count={ prepairingOrders ? prepairingOrders.length : null}>
                <Button size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => setClientOrders(prepairingOrders)}>Готовится</Button>
            </Badge>
            
            <Badge count={ onWayOrders ? onWayOrders.length : null}>
                <Button  size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => setClientOrders(onWayOrders)}>В пути </Button>
            </Badge>

                </Row>
                <Divider style={{margin: "0 0 10px 0",padding:"0 10px 0 10px"}}/>
                <Content className='overflow-y-scroll height-415'>
                {loading ? <h2>Loading...</h2> : searchedOrders.map(order => <article key={order.id}><OrderCard  order={order}  setDescription={setDescription} orderCardDescription={orderCardDescription}/></article>) }
                </Content>
                
        </Content>
            </Col>
            <Col flex="auto" >
                {orderCardDescription 
                ?  <OrderDetails orderCardDescription={orderCardDescription} changeOrderStatus={changeOrderStatus} /> 
                  :  <h2>Select Card</h2> }
                
            </Col>
        </Row>
            
        </Content>
    </Layout>
    </Layout>
    )
}