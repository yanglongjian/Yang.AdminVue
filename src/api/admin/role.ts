import axios from 'axios';
/**
 * 角色管理
 */
const module='role'

/**
 * 读取
 * @param data 
 * @returns 
 */
 export function read(data:any) {
    return axios.post(`/api/${module}/read`,data);
  }
  
  /**
   * 新增
   * @param data 
   * @returns 
   */
  export function create(data:any) {
    return axios.post(`/api/${module}/create`,data);
  }
  
  
  /**
   * 更新
   * @param data 
   * @returns 
   */
  export function update(data:any) {
    return axios.post(`/api/${module}/update`,data);
  }
  
  
  
  /**
   * 删除
   * @param data 
   * @returns 
   */
  export function deleted(data:any) {
    return axios.post(`/api/${module}/delete`,data);
  }


  
/**
 * 读取角色权限
 * @returns 
 */
 export function readRoleModules(params:any) {
  return axios.get(`/api/${module}/readRoleModules`,params);
}

/**
 * 设置角色权限
 * @param data 
 * @returns 
 */
export function setRoleModules(data:any) {
  return axios.post(`/api/${module}/setRoleModules`,data);
}
