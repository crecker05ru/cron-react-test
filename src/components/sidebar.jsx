import { Layout, Menu} from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined,
    TeamOutlined,
    HomeFilled,
    TabletFilled,
    LikeFilled,
    FileExcelFilled,
    ThunderboltFilled,
    ExportOutlined
} from '@ant-design/icons';


const {Sider} = Layout;

export default function Sidebar () {
    return (
        <Sider theme='light' width={200} className="site-layout-background ">
        <Menu theme='light' mode="inline" defaultSelectedKeys={['1']}  >
        <Menu.Item key="1" icon={<HomeFilled />}>
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TabletFilled />}>
        <Link to="orders">Заказы</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LikeFilled />}>
        <Link to="reviews"> Отзывы </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ThunderboltFilled />}>
        <Link to="banners">Банеры </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<FileExcelFilled />}>
        <Link to="reports">Отчеты</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
        <Link to="clients">Клиенты</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
        <Link to="users">Пользователи</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<ExportOutlined />} style={{position:"absolute",bottom: "0"}}>
          Выйти из аккаунта
        </Menu.Item>
      </Menu>
        </Sider>
    )
}
