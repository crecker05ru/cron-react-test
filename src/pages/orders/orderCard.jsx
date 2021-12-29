import { Layout, Col,Row,Button,Divider,Input } from 'antd';
import OrderDetails from './orderDetails';
const {Content } = Layout;
const {Search} = Input;
export default function OrderCard ({order,setDescription}) {
    const {id,date,client,partner,clientNumber,total,time} = order
 return (
           <>
           <Content className="border order-wraper margin-auto padding-10 border-left-red margin-bottom-10" onClick={() => {setDescription(order)}} >
        <Row justify='space-between'> <Col><Row>{id}</Row><Row className='font-size-12'>заказ поступил - {time}</Row></Col> <Col><Button size="small"  style={{backgroundColor:"#f7f7f7",width:"80px",height: "20px",fontSize: "12px"}}>непринятый</Button></Col></Row>
        <Row><Col><Row className='font-weight-600'>{client}</Row><Row>телефон: {clientNumber}</Row></Col></Row>
        <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
        <Row justify='space-between' align='top'><Col className='font-weight-600'>{partner}</Col> <Col>сумма - <span className='color-green font-weight-600'>{total}</span></Col></Row>
        </Content>
           </>
 )
}