import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/Styles.scss'
const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <Provider store={ store } >
                <BrowserRouter basename={ '/' } >
                        <Routes />
                </BrowserRouter>
        </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
