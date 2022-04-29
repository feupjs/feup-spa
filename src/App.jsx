import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import zhCn from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

import './App.css';
import './reset.css';

class App extends Component {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    return (
      <ConfigProvider locale={zhCn} prefixCls={'feup-spa'}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}
export default App;
