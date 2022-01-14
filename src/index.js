import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './pages/main/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {store} from './store/store' // import error on webpack 5 because of polyfill
import MainPage from './pages/main/MainPage';
import Orders from './pages/orders/Orders';
import OrdersContainer from './pages/orders/OrdersContainer'
import OrderDetails from './pages/orders/orderDetails';
ReactDOM.render(
 
  
  <React.StrictMode>
      {/* <Provider store={store}>
      <App />

      </Provider>
   */}
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<MainPage/>}/>
            <Route path="orders" element={<OrdersContainer />}>
              <Route path=":orderId" element={<OrderDetails />}/>
            </Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
