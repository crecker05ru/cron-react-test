import { Layout,Col,Row,Button,Divider,} from 'antd';

const {Content} = Layout;

export default function OrderDetails ({orderCardDescription}) {
    const {id,paymentMethod,
        address,client,clientNumber,
        comments,date,order,partner,
        personsCount,promotion,
        shipTo,total,time} = orderCardDescription
    console.log('id',id)
    return (
        <>
         <Content
            className="site-layout-background white padding-10"  
        >
            <Row justify='space-between' >
                    <Col>
                        <Row gutter={20}>
                            <Row></Row>
                            <Col className='font-weight-400'><span className='font-weight-600'>{id}</span></Col>
                        <Button size="small" >Непринятый</Button>
                    </Row>
                    <Row justify='space-between'><Col>Дата: {date}</Col><span className='vertical-divider'> | </span><Col>Время: {time}</Col></Row>
                </Col>
                <Col><Row justify='space-between' gutter={10}><Button size="small"  className="turquoise margin-right-10 text-align-center" style={{backgroundColor:"rgba(64,220,208, 1)"}}>принять заказ</Button> 
                <Button size="small" danger >отменить заказ</Button></Row>
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
                        <Row>{client}</Row>
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
                    {order.map(ord => <div key={ord.name} >
                    <Row >{ord.name}-<span>{ord.price}р </span> <span> ({ord.count} шт.)</span></Row>
                    
                    <div className='padding-left-10'>
                        <Row >добавки</Row>
                        {ord.additionals.map(add => (<Row key={add.name}>{add.name} - <span>{add.price}</span></Row>))}
                        <Divider style={{margin: "10px"}}/>
                    </div>
                
                </div>)}

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