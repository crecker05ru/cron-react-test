import { Layout, Menu} from 'antd';
import { UserOutlined, AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    TeamOutlined,
    UploadOutlined,
    VideoCameraOutlined, 
} from '@ant-design/icons';


const {Sider} = Layout;

export default function Sidebar () {
    return (
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
    )
}