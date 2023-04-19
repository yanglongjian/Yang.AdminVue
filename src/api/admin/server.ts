import axios from 'axios';

/**
 * 服务器信息
 */
const module='server'

/**
 * 读取服务器信息
 * @param data 
 * @returns 
 */
export function read() {
  return axios.get(`/api/${module}/read`);
}

/**
 * 读取服务器状态
 * @param data 
 * @returns 
 */
export function readStatus() {
  return axios.get(`/api/${module}/readStatus`);
}