import axios from 'axios';

/**
 * 登录认证
 */
 const module='identity'


/**
 * 登录
 * @param data 
 * @returns 
 */
export function token(data:any) {
  return axios.post(`/api/${module}/token`, data);
}

/**
 * 登出
 * @returns 
 */
export function logout() {
  return axios.post(`/api/${module}/logout`);
}

/**
 * 获取用户信息
 * @returns 
 */
export function profile() {
  return axios.get(`/api/${module}/profile`);
}


/**
 * 修改密码
 * @returns 
 */
 export function changePassword(data:any) {
  return axios.post(`/api/${module}/changePassword`,data);
}