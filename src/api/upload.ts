import axios from 'axios';

/**
 * 上传模块
 */
const module='common'

export const uploadAction=`/api/${module}/uploadimage`;

export function uploadImage(data: any) {
  return axios.post(uploadAction, data);
}