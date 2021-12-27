import { Layout, Col,Row,Button,Divider,Input } from 'antd';
import OrderDetails from './orderDetails';
import {useSelector} from 'react-redux'
import OrderCard from './orderCard';
const {Content } = Layout;
const {Search} = Input;
export default function ClientsOrders (){
    const {orders,loading} = useSelector(state => state.orders)
    return (
        <Layout >
        <Content
        className=" white inner-shadow"
        style={{
            margin: 0,
            minHeight: 60,
        }}
        >
            <div>Заказы клиентов</div>
            <Row justify='start' gutter={10}>
                <Col > <a href="/">В работе</a></Col>
                <Col ><a href="/">Все заказы</a></Col>
            </Row>
        </Content>
        <Layout style={{ padding: '0 20px 20px' }}>
        <Content
        className="site-layout-background main-layout"
        >
        Content
       
        <Row justify='space-between'  gutter={10}>
            <Col flex="300px">
            <Content
            className="site-layout-background white"
        >
                1
                <Search
                placeholder="input search text"
                allowClear               
                />
                <Row justify='space-between'>
                <Button onClick={() => fetch()} type="primary" size="small" >
            Запрос
            </Button>
            <Button size="small" >Default</Button>
            <Button size="small" >Def</Button>
            <Button type="dashed" size="small" >
            Dashed
            </Button>
                </Row>
                <Divider />
                 {loading ? <h2>Loading...</h2> : orders.map(order => <article key={order.id}><OrderCard order={order} /></article>) }
        </Content>
            </Col>
            <Col flex="auto">
                <OrderDetails />
            </Col>
        </Row>
            
        </Content>
    </Layout>
    </Layout>
    )
}