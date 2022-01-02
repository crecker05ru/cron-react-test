import { Layout, Menu} from 'antd';
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
        <Sider theme='light' width={200} className="site-layout-background">
        <Menu theme='light' mode="inline" defaultSelectedKeys={['1']} >
        <Menu.Item key="1" icon={<HomeFilled />}>
          Главная
        </Menu.Item>
        <Menu.Item key="2" icon={<TabletFilled />}>
          Заказы
        </Menu.Item>
        <Menu.Item key="3" icon={<LikeFilled />}>
          Отзывы
        </Menu.Item>
        <Menu.Item key="4" icon={<ThunderboltFilled />}>
          Банеры
        </Menu.Item>
        <Menu.Item key="5" icon={<FileExcelFilled />}>
          Отчеты
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
          Клиенты
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          Пользователи
        </Menu.Item>
        <Menu.Item key="8" icon={<ExportOutlined />} style={{position:"absolute",bottom: "5px"}}>
          Выйти из аккаунта
        </Menu.Item>
      </Menu>
        </Sider>
    )
}
