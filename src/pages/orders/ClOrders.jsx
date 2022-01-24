import { Layout, Col,Row,Button,Divider,Input,Badge } from 'antd';
import OrderDetails from './orderDetails';
import {useSelector} from 'react-redux'
import OrderCard from './orderCard';
import React from 'react'
const {Content } = Layout;
const {Search} = Input;

export default function ClOrders (){
    const {orders,loading} = useSelector(state => state.orders)
    const [clientsOrders,setClientOrders] = React.useState(orders)
    // const [allOrders,setAllOrders] = React.useState()
    const [displayedOrders,setDisplayedOrders] = React.useState(null)
    // const [ordersCount,setOrdersCount] = React.useState({
    //     isUnaccepted:0,
    //     isOnWay: 0,
    //     isPrepairing:0
    // })
    const [orderCardDescription,setOrderCardDescription] = React.useState(null)
    const [searchQuery,setSearchQuery] = React.useState('')
    const [selected,setSelected] = React.useState(false)
    // console.log('ordersCount',ordersCount)
    console.log('displayedOrders',displayedOrders)
    
    // function sortArray (arr) {
    //     return arr.sort((a,b) => {
    //         if(a.date < b.date) return -1
    //         else if(a.date > b.date)  return +1
    //         else if(a.date == b.date)  {
    //             if(a.time < b.time) return -1
    //             else if(a.time > b.time) return +1
    //             return 0
    //         }
    //     })
    // }

    // React.useEffect(() => {
    //         console.log('sort',sortArray(displayedOrders))
    // },[displayedOrders])
    const filteredOrders = React.useMemo(() => {
        console.log(orders)
            const isUnaccepted = orders.filter(item => item.orderStatus.isUnaccepted == true)
            const isOnWay = orders.filter(item => item.orderStatus.isOnWay == true)
            const isPrepairing = orders.filter(item => item.orderStatus.isPrepairing == true)
            return {isUnaccepted ,
            isOnWay,
            isPrepairing}

    },[clientsOrders])
    console.log('filteredOrders',filteredOrders)
    const changeDisplayedOrders = (filter) => {
            // if(filter === "isUnaccepted"){
            //     const  isUnaccepted = [...clientsOrders]?.filter(item => item.orderStatus.isUnaccepted == true)
            //     setDisplayedOrders(isUnaccepted )
            // }
            // if(filter === "isOnWay"){
            //     const isOnWay = [...clientsOrders]?.filter(item => item.orderStatus.isOnWay == true)
            //     setDisplayedOrders(isOnWay)
            // }
            // if(filter === "isPrepairing"){
            //     const isPrepairing = [...clientsOrders]?.filter(item => item.orderStatus.isPrepairing == true)
            //     setDisplayedOrders(isPrepairing)
            // }
            if(filter === "isUnaccepted"){
                setDisplayedOrders(filteredOrders.isUnaccepted)
            }
            if(filter === "isOnWay"){
                setDisplayedOrders(filteredOrders.isOnWay)
            }
            if(filter === "isPrepairing"){
                setDisplayedOrders(filteredOrders.isPrepairing)
            }
    }

    const changeOrderStatus = (id,orderStatus) => {
        const updatedOrders = [...orders]
        const requestedOrder = orders.filter(item => item.id == id)
        requestedOrder.orderStatus = orderStatus
        [updatedOrders] = requestedOrder 
        setClientOrders(updatedOrders)
        console.log('orders',orders)
        console.log("changeOrderStatus",requestedOrder)
    }
    
    const setDescription  = (order) => {
        setSelected(true)
     setOrderCardDescription(order)
    }
    
    const searchedOrdersHandler = React.useCallback(()=> {
        const searchFilter = ['client','clientNumber','date']
        let searcheOrders = clientsOrders.filter(
            order => order[searchFilter[0]].toLowerCase().includes(searchQuery.toLowerCase()) 
            || order[searchFilter[1]].toLowerCase().includes(searchQuery.toLowerCase())  
            || order[searchFilter[2]].toLowerCase().includes(searchQuery.toLowerCase()) 
            ) 
        setDisplayedOrders(searcheOrders)
    },[searchQuery,setClientOrders])

    React.useEffect(() => {
        setClientOrders(orders)
        setDisplayedOrders(orders)
        // setDisplayedOrders(allOrders.allOrders)
        if(!selected){
            setOrderCardDescription(orders[0])
        }
    },[orders])
    // React.useEffect(() => { // устанавливает значения счетчика над кнопкой фильтрации
    //     setOrdersCount({
    //       allOrders: clientsOrders.length,
    //       isUnaccepted: clientsOrders?.filter(item => item.orderStatus.isUnaccepted == true).length,
    //       isOnWay: clientsOrders?.filter(item => item.orderStatus.isOnWay == true).length,
    //       isPrepairing: clientsOrders?.filter(item => item.orderStatus.isPrepairing == true).length
    //     })
    //   }, [clientsOrders]);
    // React.useEffect(()=> {
    //     // if(clientsOrders){
            
    //     // }
    //     setDisplayedOrders(orders)
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
                onSearch={searchedOrdersHandler}
                />
                <Row justify='space-between' className='padding-10 ' gutter={5}>
                <Badge count={orders.length}>
                    <Button onClick={() => setDisplayedOrders(clientsOrders)} type="primary" size="small" >
                     Все
                    </Button> 
                </Badge>
                
            
            <Badge 
            count={ filteredOrders.isUnaccepted.length}
            >
                <Button size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => changeDisplayedOrders("isUnaccepted")}>Непринятые</Button>
            </Badge>
                
            <Badge 
            count={filteredOrders.isPrepairing.length}
            >
                <Button size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => changeDisplayedOrders("isOnWay")}>Готовится</Button>
            </Badge>
            
            <Badge 
            count={filteredOrders.isOnWay.length} 
            >
                <Button  size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => changeDisplayedOrders("isPrepairing")}>В пути </Button>
            </Badge>

                </Row>
                <Divider style={{margin: "0 0 10px 0",padding:"0 10px 0 10px"}}/>
                <Content className='overflow-y-scroll height-415'>
                {!displayedOrders ? <h2>Loading...</h2> : displayedOrders.map(order => <article key={order.id}><OrderCard  order={order}  setDescription={setDescription} orderCardDescription={orderCardDescription}/></article>) }
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