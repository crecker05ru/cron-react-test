import { Layout } from 'antd';
import Sidebar from '../../components/sidebar';
import ClientsOrders from './clientsOrders';
    
export default function Orders () {

    return (<>
          <Layout >
              <Layout>
              <Sidebar/>
              <ClientsOrders/>
              </Layout>
        </Layout>
          </>

    )
}
  

