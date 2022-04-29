import React from 'react';
import { connect } from 'react-redux';
import { Button, Space } from 'antd';
import style from './demo.module.less';

const Store = ({
  count,
  setCount,
  demoCount,
  setDemoCount,
  courseCount,
  setCourseCount,
  cardCount,
  setCardCount,
}) => {
  return (
    <div className="App-header">
      <p>下面列举了页面级 Model 的使用方式</p>
      <section className={style['demo-section']}>
        <div>
          <span>store：</span>
          <input type="text" value={count} disabled />
        </div>
        <Space style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setCount(count + 1)}>增加</Button>
          <Button onClick={() => setCount(count - 1)}>减小</Button>
        </Space>
      </section>
      <section className={style['demo-section']}>
        <div>
          <span>store/demo：</span>
          <input type="text" value={demoCount} disabled />
        </div>
        <Space style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setDemoCount(demoCount + 1)}>增加</Button>
          <Button onClick={() => setDemoCount(demoCount - 1)}>减小</Button>
        </Space>
      </section>
      <section className={style['demo-section']}>
        <div>
          <span>store/course：</span>
          <input type="text" value={courseCount} disabled />
        </div>
        <Space style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setCourseCount(courseCount + 1)}>增加</Button>
          <Button onClick={() => setCourseCount(courseCount - 1)}>减小</Button>
        </Space>
      </section>
      <section className={style['demo-section']}>
        <div>
          <span>store/card：</span>
          <input type="text" value={cardCount} disabled />
        </div>
        <Space style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setCardCount(cardCount + 1)}>增加</Button>
          <Button onClick={() => setCardCount(cardCount - 1)}>减小</Button>
        </Space>
      </section>
    </div>
  );
};

export default connect(
  (models) => ({
    // 对应 Store/index.model.js
    ...models.store,
    // 对应 Store/demo.model.js
    ...models['store/demo'],
    // 对应 Store/models/course.js
    ...models['store/course'],
    // 对应 Store/models/card.model.js
    ...models['store/card'],
  }),
  (models) => ({
    ...models.store,
    ...models['store/demo'],
    ...models['store/course'],
    ...models['store/card'],
  }),
)(Store);
