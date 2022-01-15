import { Layout, Col,Row,Button,Divider,Input } from 'antd';
import OrderDetails from './orderDetails';
const {Content } = Layout;
const {Search} = Input;
export default function OrderCard ({order,setDescription,orderCardDescription}) {
    const {id,date,client,partner,clientNumber,total,time,orderStatus} = order
    let isActiveCard = (id == orderCardDescription?.id)
   //  const status = () =>  {
   //      if(orderStatus.isUnaccepted){
   //         return "Непринятый"
   //      }else if(orderStatus.isPrepairing){
   //       return "Готовится"
   //      }else if(orderStatus.isOnWay){
   //       return "В пути"
   //    }else if(orderStatus.isCompleted){
   //       return "Завершенный"
   //    }else if(orderStatus.isCanceled){
   //       return "Отмененный"
   //    }else{
   //       return "В ожидании"
   //    }
   // }
   const status = orderStatus.isUnaccepted ? "Непринятый" 
   : orderStatus.isPrepairing ? "Готовится" 
   : orderStatus.isOnWay ? "В пути" 
   : orderStatus.isCompleted ? "Завершен" 
   : orderStatus.isCanceled ? "Отменен" 
   : "В ожидании"
   console.log('status',status)
   
 return (
           <>
           <Content className={`border order-wraper margin-auto padding-10 margin-bottom-10 ${ isActiveCard ? "active-card-red" : ""}` } onClick={() => {setDescription(order)}} >
        <Row justify='space-between'> <Col><Row>{id}</Row><Row className='font-size-12'>заказ поступил - {time}</Row></Col> <Col><Button size="small"  style={{backgroundColor:"#f7f7f7",width:"80px",height: "20px",fontSize: "12px"}}>{status}</Button></Col></Row>
        <Row><Col><Row className='font-weight-600'>{client}</Row><Row>телефон: {clientNumber}</Row></Col></Row>
        <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
        <Row justify='space-between' align='top'><Col className='font-weight-600'>{partner}</Col> <Col>сумма - <span className='color-green font-weight-600'>{total}</span></Col></Row>
        </Content>
           </>
 )
}