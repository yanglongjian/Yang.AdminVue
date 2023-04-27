import axios from 'axios';
/**
 * bnaner轮播图
 */
const module='bnaner'

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