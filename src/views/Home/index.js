import React, { Component } from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Space direction="vertical" align="center">
            <Button type="primary">
              <Link to="/about">tap about</Link>
            </Button>
            <Button type="primary">
              <Link to="/store">tap store</Link>
            </Button>
            FEUP SPA 脚手架 v1.0： 化繁为简！
          </Space>
        </header>
      </div>
    );
  }
}
