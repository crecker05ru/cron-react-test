import { Layout, Col,Row,Button,Divider,Input } from 'antd';
import OrderDetails from './orderDetails';
const {Content } = Layout;
const {Search} = Input;
export default function OrderCard ({order}) {
    const {id,date,client,partner,clientNumber,total} = order
 return (
           <>
           <Content className="border order-wraper margin-auto padding-10"  >
        <Row justify='space-between'> <Col><Row>{id}</Row><Row>{date}</Row></Col> <Col><Button size="small" >Default</Button></Col></Row>
        <Row><Col><Row>{client}</Row><Row>{clientNumber}</Row></Col></Row>
        <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
        <Row justify='space-between' align='top'><Col>{partner}</Col> <Col>Summ - <span>{total}</span></Col></Row>
        </Content>
           </>
 )
}