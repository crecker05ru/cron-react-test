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
            className="site-layout-background white"  
        >
            2
            <Row justify='space-between'>
                    <Col>
                        <Row gutter={20}>
                            <Row></Row>
                            <Col>{id}</Col>
                        <Button size="small" >Default</Button>
                    </Row>
                    <Row justify='space-between'><Col>{date}</Col><Divider type="vertical" /><Col>{time}</Col></Row>
                </Col>
                <Col><Row justify='space-between' gutter={10}><Button size="small"  className="turquoise" style={{backgroundColor:"rgba(64,220,208, 1)"}}>Принять заказ</Button> <Button size="small" danger >Отменить заказ</Button></Row>
                </Col>
            </Row>
            <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
            <Row >
                <Col span={9}>Основная информация
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
                </Col>
                <Col span={1}><Divider type='vertical' /></Col>
                <Col span={14}>Информация о заказе
                <Row>{order[0].name} <span>{order.price}</span> <span>{order.count}</span></Row>
                <Row>добавки</Row>
                {order[0].additionals.map(add => (<Row>{add.name} - <span>{add.price}</span></Row>))}
                <Divider/>
                <Row>{order[0].name}</Row>
                <Row>добавки</Row>
                {order[0].additionals.map(add => (<Row>{add.name} - <span>{add.price}</span></Row>))}
                
                <Divider/>
                <Col>
                <Row style={{marginTop:"100px"}} >Комментарии к заказу</Row>
                <Row>{comments}</Row>
                </Col>
                </Col>
            </Row>
        </Content>
        </>
    )
}