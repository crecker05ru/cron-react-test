import { Layout, Menu, Col,Row} from 'antd';
import { Link } from "react-router-dom";
import {UserOutlined,InstagramOutlined} from '@ant-design/icons'

const { Header} = Layout;

export default function Head (){
    return(
        <Header className="header">
        <Menu theme="dark"  >
            <Row justify="space-between">
                <Col ><Link to="/"> <InstagramOutlined /> <span>CronMarket</span></Link></Col>
                <Col ><UserOutlined /></Col>
            </Row>
        </Menu>
        </Header>
    )
}