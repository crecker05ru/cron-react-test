import { Layout, Col,Row,Button,Divider,Input,Badge } from 'antd';
import OrderDetails from './orderDetails';
import {useSelector} from 'react-redux'
import OrderCard from './orderCard';
import React from 'react'
import CustomBadgeButton from './../../generics/CustomBadgeButton';
const {Content } = Layout;
const {Search} = Input;

export default function ClOrders (){
    const {orders,loading} = useSelector(state => state.orders)
    const [clientsOrders,setClientOrders] = React.useState(orders)
    const [displayedOrders,setDisplayedOrders] = React.useState(null)
    const [orderCardDescription,setOrderCardDescription] = React.useState(null)
    const [searchQuery,setSearchQuery] = React.useState('')
    const [selected,setSelected] = React.useState(false)
    console.log('displayedOrders',displayedOrders)
    
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

    // React.useEffect(() => {
    //     if(displayedOrders){
    //         sortArray(displayedOrders)
    //         console.log('sort',sortArray(displayedOrders))
    //     }  
    // },[displayedOrders])

    const filteredOrders = React.useMemo(() => {
        console.log(orders)
            const allOrders = clientsOrders.filter(item => item.orderStatus.isCompleted == false)
            const isUnaccepted = clientsOrders.filter(item => item.orderStatus.isUnaccepted == true)
            const isOnWay = clientsOrders.filter(item => item.orderStatus.isOnWay == true)
            const isPrepairing = clientsOrders.filter(item => item.orderStatus.isPrepairing == true)
            return {allOrders,isUnaccepted ,
            isOnWay,
            isPrepairing}

    },[orders,clientsOrders])

    const cardButtons = () => {
        // for(let key of Object.keys(filteredOrders))

        // for(let key in filteredOrders)
        // {
        //     console.log('filteredOrders - key',key)
        //     return(
        //         <CustomBadgeButton 
        //         count={filteredOrders[key].length} 
        //         onClick={() => changeDisplayedOrders([key])}
        //         children={[key]}
        //         />
        //     )
        // }
        const keys = Object.keys(filteredOrders)
        console.log('keys ',keys )
        // keys.forEach(key => {
        //     console.log('filteredOrders - key',key)
        //     return(
        //         <CustomBadgeButton 
        //         count={filteredOrders[key].length} 
        //         onClick={() => changeDisplayedOrders([key])}
        //         children={[key]}
        //         />
        //     )
        // })
        return(
            <>
            {keys.map(key => {
                {console.log('key ',key ,filteredOrders)}
                {console.log('filteredOrders[key]',filteredOrders[key])}
                <CustomBadgeButton 
                count={filteredOrders[key].length} 
                onClick={() => changeDisplayedOrders([key])}
                children={[key]}
                />
            })}
            </>
        )
    }
    
    // React.useEffect(()=>{
    //     cardButtons()
    //     console.log('cardButtons()',cardButtons())
    // },[])
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
        // setDisplayedOrders(filteredOrders.allOrders)
        console.log('orders',orders)
        console.log("changeOrderStatus",requestedOrder)
    }
    
    const setDescription  = (order) => {
        setSelected(true)
     setOrderCardDescription(order)
    }
    
    const searchedOrdersHandler = React.useCallback(()=> {
        const searchFilter = ['client','clientNumber','id']
        let searcheOrders = clientsOrders.filter(
            order => order[searchFilter[0]].toLowerCase().includes(searchQuery.toLowerCase()) 
            || order[searchFilter[1]].toLowerCase().includes(searchQuery.toLowerCase())  
            || order[searchFilter[2]].toString().includes(searchQuery.toLowerCase()) 
            ) 
        setDisplayedOrders(searcheOrders)
    },[searchQuery,setClientOrders])

    React.useEffect(() => {
        setClientOrders(sortArray(orders))
        setDisplayedOrders(filteredOrders.allOrders)
        // setDisplayedOrders(allOrders.allOrders)
        if(!selected){
            setOrderCardDescription(orders[0])
        }
        // sortArray(clientsOrders)
        console.log('sort',sortArray(clientsOrders))

    },[orders,clientsOrders])
     
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
                {/* <Badge count={orders.length}>
                    <Button onClick={() => setDisplayedOrders(clientsOrders)} type="primary" size="small" >
                     Все
                    </Button> 
                </Badge> */}
                {/* {cardButtons()} */}
            <CustomBadgeButton count={filteredOrders.allOrders.length} 
            onClick={() => setDisplayedOrders(filteredOrders.allOrders)}
            children="Все"  size="small" />
            <CustomBadgeButton count={filteredOrders.isUnaccepted.length} 
            onClick={() => setDisplayedOrders(filteredOrders.isUnaccepted)}
            children="Непринятые"  size="small" />
            <CustomBadgeButton count={filteredOrders.isPrepairing.length} 
            onClick={() => setDisplayedOrders(filteredOrders.isPrepairing)}
            children="Готовятся"  size="small" />
            <CustomBadgeButton count={filteredOrders.isOnWay.length} 
            onClick={() => setDisplayedOrders(filteredOrders.isOnWay)}
            children="В пути"  size="small" />
            {/* <Badge 
            count={ filteredOrders.isUnaccepted.length}
            >
                <Button size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => changeDisplayedOrders("isUnaccepted")}>Непринятые</Button>
            </Badge>
                
            <Badge 
            count={filteredOrders.isPrepairing.length}
            >
                <Button size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => changeDisplayedOrders("isPrepairing")}>Готовится</Button>
            </Badge>
            
            <Badge 
            count={filteredOrders.isOnWay.length} 
            >
                <Button  size="small" style={{backgroundColor:"#f7f7f7"}} onClick={() => changeDisplayedOrders("isOnWay")}>В пути </Button>
            </Badge> */}
                
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