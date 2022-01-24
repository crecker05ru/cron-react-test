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

    const [clientsOrders,setClientOrders] = useState([...orders]) //?
    const [displayedOrders,setDisplayedOrders] = useState([...orders])
    const [allOrders,setAllOrders] = useState(orders)
    const [orderCardDescription,setOrderCardDescription] = useState(null)
    const [searchQuery,setSearchQuery] = useState('')
        // const [searchedOrders,setSearchedOrders] = useState(clientsOrders)
    const [selected,setSelected] = useState(false)

    
    const [acceptedOrders,setAcceptedOrders] = useState(null)
    const [prepairingOrders,setPrepairingOrders] = useState(null)
    const [onWayOrders,setOnWayOrders] = useState(null)
    const [acceptedOrdersCount,setAcceptedOrdersCount] = useState(0)
    console.log('clientsOrders',clientsOrders)
    
    function sortArray (arr) {
        return arr.sort((a,b) => {
            if(a.date < b.date) return -1
            else if(a.date > b.date)  return +1
            else if(a.date == b.date)  {
                if(a.time < b.time) return -1
                else if(a.time > b.time) return +1
                return 0
            }
        })
    }

    useEffect(() => {

            console.log('sort',sortArray(clientsOrders))

    },[clientsOrders])

    // console.log('sort',sortArray(clientsOrders))

    // let arr = [{date: '28.12.2021'},{date: "27.12.2021"},{date: "26.12.2021"},{date: "29.12.2021"}]
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

    // const searchQueryHandler = () => {
    //         const searchFilter = ['client','clientNumber','date']
    //         setSearchedOrders(clientsOrders.filter(
    //             order => order[searchFilter[0]].toLowerCase().includes(searchQuery.toLowerCase()) 
    //         || order[searchFilter[1]].toLowerCase().includes(searchQuery.toLowerCase())  
    //         || order[searchFilter[2]].toLowerCase().includes(searchQuery.toLowerCase()) 
    //         ) )
    // }
        
  

    useEffect(()=>{
        if(orders.length){
            const acceptedOrders = [...orders].filter(item => item.orderStatus.isUnaccepted == true)
            setAcceptedOrders(acceptedOrders)
            const onWayOrders = [...orders].filter(item => item.orderStatus.isOnWay == true)
            setOnWayOrders(onWayOrders)
            const prepairingOrders = [...orders].filter(item => item.orderStatus.isPrepairing == true)
            setPrepairingOrders(prepairingOrders)
        }
    },[orders])

    // useEffect(()=>{
    //     if(orders){

    //     }
    // },[clientsOrders])

    // useEffect(()=>{
    //     if(orders){

    //     }
    // },[clientsOrders])
    

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


    // const searchedOrders = useMemo(()=> {
    //     return clientsOrders.filter(order => order.date.includes(searchQuery.toLowerCase()))
    // },[searchQuery,clientsOrders])
    
    const searchedOrders = useMemo(()=> {
        const searchFilter = ['client','clientNumber','date']
        return clientsOrders.filter(
        order => order[searchFilter[0]].toLowerCase().includes(searchQuery.toLowerCase()) 
        || order[searchFilter[1]].toLowerCase().includes(searchQuery.toLowerCase())  
        || order[searchFilter[2]].toLowerCase().includes(searchQuery.toLowerCase()) 
        ) 
    },[searchQuery,clientsOrders])

    // const searchQueryHandler = () => {
    //     const searchFilter = ['client','clientNumber','date']
    //     const searched = orders.filter(order => order.date.includes(searchQuery.toLowerCase()))
    // }

    useEffect(() => {
        setClientOrders(orders)
        // setSearchedOrders(clientsOrders)
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
                placeholder="Поиск по имени,номеру,дате"
                allowClear 
                className='border-radius-20 padding-10' 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                // onSearch={searchQueryHandler}
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