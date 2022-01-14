import React from 'react';
import 'antd/dist/antd.min.css'
import './../../styles/index.scss';
import './../../styles/App.scss';

import Head from '../../components/head'
import { Layout } from 'antd';
import {
   BrowserRouter,
   Routes,
   Route
 } from "react-router-dom";
import MainPage from './MainPage';
import Sidebar from '../../components/sidebar';
import { Outlet} from "react-router-dom";
import OrdersContainer from '../orders/OrdersContainer'
import OrderDetails from './../orders/orderDetails';

const App = () => (
   <>
   {/* <BrowserRouter> */}
   <Layout className="main-wrapper">
      <Head />
      <Layout >
         <Layout>
              <Sidebar/>
              {/* <Routes>
                 <Route path="/" element={<MainPage />}/>
                 <Route path="/orders" element={<OrdersContainer/>}>
                   <Route path=":orderId" element={<OrderDetails />} />
                 </Route>
                 <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>Page not found</p>
        </main>
      }
    />
              </Routes> */}
              <Outlet/>
         </Layout>
      </Layout>
   </Layout>
   {/* </BrowserRouter> */}

   </>
   
   
);

export default App;
