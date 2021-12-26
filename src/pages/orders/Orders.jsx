import { Layout, Menu, Col,Row,Input,Button,Divider } from 'antd';
import {NavLink} from 'react-router-dom'
import { UserOutlined, AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    VideoCameraOutlined, } from '@ant-design/icons';
    

const { SubMenu } = Menu;
const {Search} = Input
const { Header, Content, Sider } = Layout;

export default function Order () {
    return (
        <Layout >
        <Header className="header">
        <Menu theme="dark"  >
            <Row justify="space-between">
                <Col >Logo</Col>
                <Col >User</Col>
            </Row>
        </Menu>
        </Header>
        <Layout>
        <Sider theme='light' width={200} className="site-layout-background">
        <Menu theme='light' mode="inline" defaultSelectedKeys={['1']} >
        <Menu.Item key="1" icon={<UserOutlined />}>
          Главная
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Заказы
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Отзывы
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Банеры
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          Отчеты
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          Клиенты
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          Пользователи
        </Menu.Item>
      </Menu>
        </Sider>
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
                    <Col > <a>В работе</a></Col>
                    <Col ><a>Все заказы</a></Col>
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
                    <Button type="primary" size="small" >
                Primary
                </Button>
                <Button size="small" >Default</Button>
                <Button size="small" >Def</Button>
                <Button type="dashed" size="small" >
                Dashed
                </Button>
                    </Row>
                    <Divider />
                    <Content className="border order-wraper margin-auto padding-10" 
          >
            <Row justify='space-between'> <Col><Row>No</Row><Row>Order</Row></Col> <Col><Button size="small" >Default</Button></Col></Row>
            <Row><Col><Row>Sadam</Row><Row>Tel</Row></Col></Row>
            <Divider style={{marginTop: "5px",marginBottom:"5px"}}/>
            <Row justify='space-between' align='top'><Col>Pavlonia</Col> <Col>Summ - <span>250</span></Col></Row>
          </Content>
            </Content>
                </Col>
                <Col flex="auto">
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
                </Col>
            </Row>
            </Content>
        </Layout>
        </Layout>
        </Layout>
  </Layout>
    )
}
  

