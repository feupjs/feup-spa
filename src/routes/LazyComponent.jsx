import React, { Component, lazy, Suspense } from 'react';

function LazyComponent(importComponent) {
  class _LazyComponent extends Component {
    constructor(...props) {
      super(...props);
      this.state = {
        ChildComponent: lazy(importComponent),
      };
    }

    componentDidCatch(err) {
      console.error('异步组件加载异常：', err);
    }

    render() {
      const { ChildComponent } = this.state;
      return (
        <Suspense fallback={<div />}>
          <ChildComponent />
        </Suspense>
      );
    }
  }

  return _LazyComponent;
}

export default LazyComponent;
