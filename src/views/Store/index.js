import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';

const Store = ({ count, setCount }) => {
  return (
    <div>
      <header className="App-header">
        <input type="text" value={count} disabled />
        <Space style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setCount(count + 1)}>增加</Button>
          <Button onClick={() => setCount(count - 1)}>减小</Button>
        </Space>
      </header>
    </div>
  );
};

export default connect(
  ({ demo }) => ({ ...demo }),
  ({ demo }) => ({ ...demo }),
)(Store);
