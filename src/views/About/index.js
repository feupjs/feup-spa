import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Button type="danger">
            <Link to="/home">tap home</Link>
          </Button>
          FEUP SPA 脚手架 v1.0： 助力开发！
        </header>
      </div>
    );
  }
}
