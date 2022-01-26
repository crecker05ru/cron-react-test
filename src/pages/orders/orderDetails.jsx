import { Layout,Col,Row,Button,Divider,} from 'antd';
import { useParams,Link } from "react-router-dom";
import { useActions } from '../../hooks/useActions';
import {DownOutlined} from  '@ant-design/icons'
import {useState,useRef} from 'react';
import AdditionalList from '../../generics/AdditionalList';

const {Content} = Layout;

export default function OrderDetails ({orderCardDescription,changeOrderStatus}) {
    let { orderId } = useParams();
    const [isClosed,setIsClosed] = useState(false)
    const arrowEl = useRef()
    console.log('arrowEl',arrowEl)

    const {id,paymentMethod,
        address,client,clientNumber,
        comments,date,order,partner,
        personsCount,promotion,
        shipTo,total,time,orderStatus} = orderCardDescription
    console.log('id',id)



    const status = orderStatus.isUnaccepted ? "Непринятый" 
   : orderStatus.isPrepairing ? "Готовится" 
   : orderStatus.isOnWay ? "В пути" 
   : orderStatus.isCompleted ? "Завершен" 
   : orderStatus.isCanceled ? "Отменен" 
   : "В ожидании"
   console.log('status',status)

   const ordersStatusChanger = status === "В ожидании" ? "Принять заказ" 
   :status ===  "Готовится"  ? "В пути"
   :status === "В пути" ? "Завершить" 
   : "Принять заказ" 
   
   
    const acceptOrder = () => {
        orderStatus.isPrepairing = true
        orderStatus.isUnaccepted = false
        changeOrderStatus(id,orderStatus)
        console.log("acceptOrder",orderStatus)
    }
    const orderOnWay = () => {
        orderStatus.isPrepairing = false
        orderStatus.isOnWay = true
        changeOrderStatus(id,orderStatus)
    }
    const completeOrder = () => {
        orderStatus.isOnWay = false
        orderStatus.isCompleted = true
        changeOrderStatus(id,orderStatus)
    }

   const cancelOrder = () => {
        orderStatus.isPrepairing = false
        orderStatus.isCanceled = true
        changeOrderStatus(id,orderStatus)
        console.log("cancelOrder",orderStatus)
   }

   const isClosedHandler = () => {
       setIsClosed(!isClosed)
   }
   const ordersStatusChangerHandler = () => {
       console.log('ordersStatusChanger',ordersStatusChanger)
       if(ordersStatusChanger === "Принять заказ"){
        acceptOrder()
       }
       if(ordersStatusChanger === "В пути"){
        orderOnWay()
       }
       if(ordersStatusChanger === "Завершить" ){
        completeOrder()
       }

       
   }
    return (
        <>
         <Content
            className="site-layout-background white padding-10"  
        >
            <Row justify='space-between'  wrap={false}>
                    <Col>
                        <Row gutter={20}>
                            <Row></Row>
                            <Col className='font-weight-400'><span className='font-weight-600'>{id}</span></Col>
                        <Button size="small" >{status}</Button>
                    </Row>
                    <Row justify='space-between' wrap={false}><Col>Дата: {date}</Col><span className='vertical-divider'> | </span><Col>Время: {time}</Col></Row>
                </Col>
                <Col>
                <Row justify='space-between' gutter={10} wrap={false}>
                    <Button size="small"  className="turquoise margin-right-10 text-align-center" 
                    style={{backgroundColor:"rgba(64,220,208, 1)"}} 
                    onClick={ordersStatusChangerHandler}>{ordersStatusChanger}
                    </Button>
                     
                    <Button size="small" danger onClick={cancelOrder}>отменить заказ</Button>
                </Row>
                </Col>
            </Row>
            <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
            <Row >
                <Col  span={9} >
                    <Row className='font-weight-600' >
                      Основная информация
                    </Row>
                    <div className='order-main-info'>
                        <Row className='light-blue-text'> Клиент</Row>
                        <Row><Link to={`clients/${id}`} >{client}</Link></Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>Номер</Row>
                        <Row>{clientNumber}</Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>Адрес</Row>
                        <Row>{address}</Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>Партнер</Row>
                        <Row>{partner}</Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>Доставить к</Row>
                        <Row>{shipTo}</Row>
                        <Row className='light-blue-text'>кол-во персон</Row>
                        <Row >{personsCount}</Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>Способ оплаты</Row>
                        <Row>{paymentMethod}</Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>акция</Row>
                        <Row>{promotion}</Row>
                        <Divider style={{margin: "0"}}/>
                        <Row className='light-blue-text'>Сумма заказа/к оплате</Row>
                        <Row>{total}</Row>
                    </div>
                    
                </Col>
                <Col span={1}><Divider type='vertical' /></Col>
                <Col span={14} ><span className='font-weight-600'>Информация о заказе</span>
                    <div className='order-main-info'>
                    {/* {order.map(ord => <div key={ord.name} >
                    <Row >{ord.name}-<span>{ord.price}р </span> <span> ({ord.count} шт.)</span>
                    <Button type="link" onClick={isClosedHandler}><DownOutlined  className={isClosed?"rotate-180 closed ":"rotate-180"}/></Button>
                    </Row>
                    {isClosed ? <> </>
                     : <div className='padding-left-10' ref={arrowEl}>
                     <Row >добавки</Row>
                     {ord.additionals.map(add => (<Row key={add.name}>{add.name} - <span>{add.price}</span></Row>))}
                     
                     <Divider style={{margin: "10px"}}/>
                 </div>
                     }
                    
                
                </div>)} */}
                {order.map(ord => <AdditionalList order={ord}/>)}

                <Col>
                <Row style={{marginTop:"100px"}} className='font-weight-600' >Комментарии к заказу</Row>
                <Row className='padding-left-10'>{comments}</Row>
                </Col>
                    </div>
                
                </Col>
            </Row>
        </Content>
        </>
    )
}