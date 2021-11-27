## FEUP-SPA 脚手架 V1.0

> 开启全新的旅程

## 使用方式

### 使用 feup-cli

```bash
npm install -g feup

feup create <projectName>

...

```

[点击查看 feup-cli 介绍](https://www.feup.cn/feup-cli/v2)

### 使用 git

```bash
git clone <projectRepo>
```

### 开发

```bash
yarn

yarn run start
```

## 部署

```bash
开发环境： yarn run build:dev
测试环境： yarn run build:test
预发布环境： yarn run build:pre
生产环境： yarn run build:prod
```

## feup.config.js 配置

```js
module.exports = {
  name: 'pitaya', // 项目名字
  dingdingNoticeId: 'xxx', // 钉钉发送通知,联系sdwang@feup.cn
};
```

[点击查看更多配置](https://www.feup.cn/fig-cli/v2/options)

## 脚手架结构介绍

```bash
├── node_modules # 依赖
├── public # 公共目录
│   ├── index.html
├── src # 源文件
│   ├── components # 公共组件
│   ├── consts # 公共变量
│   ├── routes # 路由
│   ├── services # 请求
│   ├── store # 状态管理
│   ├── utils # 工具函数集合 -> 可以看一下下面提供的 utils 库链接
│   ├── views # 页面文件
│   ├── App.js # 入口组件
│   ├── index.js # 主入口
├── README.md # 项目介绍
├── fig.config.js # fig-cli 配置文件
├── package.json # 项目管理说明
```

[点击查看 utils 库](https://www.feup.cn/utils-pages)

> utils 是一个通用 util 仓库。

## 特性

- 拿来即用
- 状态管理：rematch
- 灵活的用户配置 fig.config.js
- 编译完成后 钉钉通知
- 集成 Antd4
