import { Layout,Col,Row,Button,Divider,Input,Table} from 'antd';
import {ShoppingCartOutlined,StarOutlined,CommentOutlined,SmileOutlined} from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useEffect} from 'react'

export default function ClientsPage ({client}){
    // const {id,clientName,clientNumber,orders} = client[0]
    const id = client[0]?.id
    const clientName = client[0]?.clientName
    const clientNumber = client[0]?.clientNumber
    const orders = client[0]?.orders
    const earned = client[0]?.earned
    const earnedTotal = client[0]?.earnedTotal
    const rating = client[0]?.rating
    const comments = client[0]?.comments
    const ordersCount = orders?.length
    
    const columns = [
        {
          title: 'N',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Заказы',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Партнер',
          dataIndex: 'partner',
          key: 'partner',
        },
        {
            title: 'Сумма заказа / к оплате',
            dataIndex: 'total',
            key: 'total',
          },
          {
            title: 'Дата/Время',
            dataIndex: 'date',
            key: 'date',
          },
      ];

    console.log('client',client)
    console.log('clientName',id,clientName,orders)
    return (
        <>
        <Layout className='clients-main-layout'>
            <div className='clients-top-layer'>
                <Row justify='start' wrap={false} gutter={20} className='grid-gap-20'>
                    <Col span={6} className='white-background '>
                        <Row><span><ShoppingCartOutlined /></span>Заказы</Row>
                        <Row justify='end' wrap={false} >
                            <Col > 
                            <Row>За текущий месяц</Row>
                            <Row justify='end' wrap={false}><Col>{orders?.length}</Col></Row>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row justify='end' wrap={false} gutter={10}>
                            <Col>
                            <Row justify='end' wrap={false}><Col>7</Col></Row>
                            <Row justify='end' wrap={false}><Col>За прошлый</Col></Row>
                            </Col>
                            <Col>
                            <Row justify='end' wrap={false}><Col>22</Col></Row>
                            <Row justify='end' wrap={false}><Col>За все время</Col></Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} className='white-background'><span>@</span>Заработано
                        <Row justify='end' wrap={false}>
                                <Col>
                                <Row>За текущий месяц</Row>
                                <Row justify='end' wrap={false}><Col>{earned}</Col></Row>
                                </Col>
                        </Row>
                        <Divider/>
                        <Row justify='end' wrap={false} gutter={10}>
                            <Col>
                            <Row justify='end' wrap={false}><Col>0</Col></Row>
                            <Row justify='end' wrap={false}><Col>За прошлый</Col></Row>
                            </Col>
                            <Col>
                            <Row justify='end' wrap={false}><Col>{earnedTotal}</Col></Row>
                            <Row justify='end' wrap={false}><Col>За все время</Col></Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={5} className='white-background'><span><StarOutlined /></span>Средняя оценка
                        <Row justify='end' wrap={false}>
                            <Col>
                            <Row>За текущий месяц</Row>
                            <Row justify='end' wrap={false}><Col>0</Col></Row>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row justify='end' wrap={false} gutter={10}>
                            <Col>
                            <Row justify='end' wrap={false}><Col>0.0</Col></Row>
                            <Row justify='end' wrap={false}><Col>За прошлый</Col></Row>
                            </Col>
                            <Col>
                            <Row justify='end' wrap={false}><Col>{rating}</Col></Row>
                            <Row justify='end' wrap={false}><Col>За все время</Col></Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={5} className='white-background'><span><CommentOutlined /></span>Комментарии
                        <Row justify='end' wrap={false}>
                            <Col>
                            <Row>За все время </Row>
                            <Row justify='end' wrap={false}><Col>20</Col></Row>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row justify='end' wrap={false} gutter={10}>
                            <Col >
                            {comments?.positive}
                            </Col>
                            <Col >
                            {comments?.negative}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className='clients-bottom-layer'>
                <Row gutter={20}  wrap={false} className='grid-gap-20'>
                    <Col span={7} className='clients-notification-card white-background'>
                        <Row>
                            <Col><SmileOutlined /></Col>
                            <Col>
                                <Row>{clientName}</Row>
                                <Row>{clientNumber}</Row>
                            </Col>
                        </Row>
                        <Row>Заголовок</Row>
                        <Input placeholder='Введите заголовок'></Input>
                        <Row>Уведомление</Row>
                        <Input placeholder='Введите текст уведомления'></Input>
                       <Row justify="center"> <Button className="clients-layer__button" type="primary" danger>Отправить</Button></Row>
                    </Col>
                    <Col span={16} className='clients-order-table white-background'>
                        <div className="clients-table">
                            {/* <tr>
                                <td>N</td>
                                <td>Заказы</td>
                                <td>Партнер</td>
                                <td>Сумма заказа / к оплате</td>
                                <td>Дата / Время</td>
                            </tr> */}
                            <Table dataSource={orders} columns={columns} />
                        </div>
                    </Col>
                </Row>
            </div>          
        </Layout>
        </>
    )
}