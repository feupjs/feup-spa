import { currentEnv } from './env';

// 跳转passport登录相关参数
const passportInfo = {
  // 登录跳转链接
  url: {
    dev: 'https://test-passport.feup.cn',
    test: 'https://test-passport.feup.cn',
    pre: 'https://pre-passport.feup.cn',
    prod: 'https://passport.feup.cn',
  }[currentEnv],
  // 请求appid参数
  appid: {
    dev: 'xxxx',
    test: 'xxxx',
    pre: 'xxx',
    prod: 'xxx',
  }[currentEnv],
  // cookie变量值
  cookieName: {
    dev: 'xxxxxx',
    test: 'xxxxxx',
    pre: 'xxxxxx',
    prod: 'xxxxxx',
  }[currentEnv],
};

// 登录权限
export const PASSPORT_INFO = passportInfo;
