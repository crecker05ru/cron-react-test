import { Layout, Menu, Col,Row} from 'antd';
import {UserOutlined,InstagramOutlined} from '@ant-design/icons'

const { Header} = Layout;

export default function Head (){
    return(
        <Header className="header">
        <Menu theme="dark"  >
            <Row justify="space-between">
                <Col ><InstagramOutlined /></Col>
                <Col ><UserOutlined /></Col>
            </Row>
        </Menu>
        </Header>
    )
}