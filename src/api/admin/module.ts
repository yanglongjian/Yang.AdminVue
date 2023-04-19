import axios from 'axios';

/**
 * 模块管理
 */
const module='module'

/**
 * 读取
 * @param data 
 * @returns 
 */
export function read() {
  return axios.post(`/api/${module}/read`);
}
