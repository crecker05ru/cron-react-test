import { Layout, Col,Row,Button,Divider,Input } from 'antd';
import OrderDetails from './orderDetails';
import {useSelector} from 'react-redux'
import OrderCard from './orderCard';
import {useState,useEffect} from 'react'
const {Content } = Layout;
const {Search} = Input;
export default function ClientsOrders (){
    const {orders,loading} = useSelector(state => state.orders)
    const [orderCardDescription,setOrderCardDescription] = useState(null)

    const setDescription  = (order) => {
     setOrderCardDescription(order)
    }
    useEffect(() => {
        if(!orders.length){
            return(loading)

        }else if(orders.length >= 0 ){
            setOrderCardDescription(orders[0])
            console.log('orderCardDescription',orderCardDescription)
        }

    },[])

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
       
        <Row justify='space-between'  gutter={10}>
            <Col flex="300px">
            <Content
            className="site-layout-background white"
        >
                <Search
                placeholder="input search text"
                allowClear 
                className='border-radius-20 padding-10'              
                />
                <Row justify='space-between' className='padding-10'>
                <Button onClick={() => fetch()} type="primary" size="small" >
            Все
            </Button>
            <Button size="small" style={{backgroundColor:"#f7f7f7"}} >Непринятые</Button>
            <Button size="small" style={{backgroundColor:"#f7f7f7"}}>Готовится</Button>
            <Button  size="small" style={{backgroundColor:"#f7f7f7"}} >В пути </Button>
                </Row>
                <Divider style={{margin: "0 0 10px 0",padding:"0 10px 0 10px"}}/>
                <Content className='overflow-y-scroll height-500'>
                {loading ? <h2>Loading...</h2> : orders.map(order => <article key={order.id}><OrderCard order={order}  setDescription={setDescription}/></article>) }
                </Content>
                
        </Content>
            </Col>
            <Col flex="auto" >
                {orderCardDescription ?  <OrderDetails orderCardDescription={orderCardDescription}/> :  <h2>Select Card</h2> }
                
            </Col>
        </Row>
            
        </Content>
    </Layout>
    </Layout>
    )
}