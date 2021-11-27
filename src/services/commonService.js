import { PASSPORT_INFO } from '../consts/baseApi';
import request from '../utils/request';

/**
 * 接口名称、文档
 * http://yapi.feup.cn/project/998/interface/api/5759
 */
export const getTestDemo = payload => {
  return request.post(`${PASSPORT_INFO}/plat/p`, payload);
};
