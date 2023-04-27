import axios from 'axios';
/**
 * 指示板
 */
const module='workplace'

/**
 * 读取
 * @param data 
 * @returns 
 */
 export function read(data:any) {
  return axios.get(`/api/${module}/read`,data);
}

/**
 * 读取
 * @param data 
 * @returns 
 */
 export function readPublicOpinions(data:any) {
    return axios.post(`/api/${module}/readPublicOpinions`,data);
  }