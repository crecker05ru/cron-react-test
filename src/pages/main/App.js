import React from 'react';
import 'antd/dist/antd.min.css'
import './../../styles/index.scss';
import './../../styles/App.scss';
import OrdersContainer from '../orders/OrdersContainer'
import Head from '../../components/head'


const App = () => (
   <>
   <Head />
   <OrdersContainer />
   </>
   
   
);

export default App;
