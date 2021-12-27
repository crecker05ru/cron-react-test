import { Layout, Menu, Col,Row} from 'antd';

const { Header} = Layout;

export default function Head (){
    return(
        <Header className="header">
        <Menu theme="dark"  >
            <Row justify="space-between">
                <Col >Logo</Col>
                <Col >User</Col>
            </Row>
        </Menu>
        </Header>
    )
}