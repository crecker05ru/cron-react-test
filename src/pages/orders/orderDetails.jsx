import { Layout,Col,Row,Button,Divider,} from 'antd';

const {Content} = Layout;

export default function OrderDetails () {
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
                            <Col>N</Col>
                        <Button size="small" >Default</Button>
                    </Row>
                    <Row justify='space-between'><Col>Date</Col><Divider type="vertical" /><Col>Time</Col></Row>
                </Col>
                <Col><Row justify='space-between' gutter={10}><Button size="small"  className="turquoise" style={{backgroundColor:"rgba(64,220,208, 1)"}}>Принять заказ</Button> <Button size="small" danger >Отменить заказ</Button></Row>
                </Col>
            </Row>
            <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
            <Row >
                <Col span={9}>Основная информация
                    <Row className='light-blue-text'> Клиент</Row>
                    <Row>Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>Номер</Row>
                    <Row>Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>Адрес</Row>
                    <Row>Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>Партнер</Row>
                    <Row>Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>Доставить к</Row>
                    <Row>Sadam</Row>
                    <Row className='light-blue-text'>кол-во персон</Row>
                    <Row >Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>Способ оплаты</Row>
                    <Row>Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>акция</Row>
                    <Row>Sadam</Row>
                    <Divider style={{margin: "0"}}/>
                    <Row className='light-blue-text'>Сумма заказа/к оплате</Row>
                    <Row>Sadam</Row>
                </Col>
                <Col span={1}><Divider type='vertical' /></Col>
                <Col span={14}>Информация о заказе
                <Row>Кур</Row>
                <Row>добавки</Row>
                <Row>С гречкой - 0р</Row>
                <Divider/>
                <Row>Кур</Row>
                <Row>добавки</Row>
                <Row>С гречкой - 0р</Row>
                <Divider/>
                <Col>
                <Row style={{marginTop:"100px"}} >Комментарии к заказу</Row>
                <Row>Тестовый заказ кронмаркет</Row>
                </Col>
                </Col>
            </Row>
        </Content>
        </>
    )
}