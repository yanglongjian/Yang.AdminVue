import axios from 'axios';
/**
 * 用户管理
 */
const module='user'

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
 * 重置密码
 * @returns 
 */
 export function resetPassword(data:any) {
  return axios.post(`/api/${module}/resetPassword`,data);
}


/**
 * 读取用户角色
 * @returns 
 */
export function readUserRoles(params:any) {
  return axios.get(`/api/${module}/readUserRoles`,params);
}
/**
 * 设置用户角色
 * @returns 
 */
 export function setUserRoles(data:any) {
  return axios.post(`/api/${module}/setUserRoles`,data);
}


/**
 * 读取用户权限
 * @returns 
 */
 export function readUserModules(params:any) {
  return axios.get(`/api/${module}/readUserModules`,params);
}

/**
 * 设置用户权限
 * @param data 
 * @returns 
 */
export function setUserModules(data:any) {
  return axios.post(`/api/${module}/setUserModules`,data);
}
