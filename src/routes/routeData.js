// 页面路由
export const routeData = [
  {
    path: '/',
    redirect: '/home', // 跳转指定页面
  },
  {
    path: '/home',
    component: () => import('../views/Home'), // 声明此组件，将不判断是否显示h5/pc组件
    // componentPc: () => import('../views/Home'), // pc页面
    // componentH5: () => import('../views/Home'), // h5页面
  },
  {
    path: '/About',
    component: () => import('../views/About'),
  },
  {
    path: '/store',
    component: () => import('../views/Store'),
  },
];
