import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { getToken, getXToken, setToken } from '@/utils/auth';
if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    const xtoken = getXToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['X-Authorization'] = `Bearer ${xtoken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.headers['access-token'] && response.headers['x-access-token']) {
      setToken(response.headers['access-token'], response.headers['x-access-token']);
    }
    const res = response.data;
    if (res.statusCode !== 200) {
      Message.error({
        content: res.errors || 'Error',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.errors || 'Error'));
    }
    return res;
  },
  (error) => {
    // if (error.response?.status == 401) {
    //   debugger
    //   setTimeout(() => {
    //     const userStore = useUserStore();
    //     userStore.logoutCallBack();
    //     window.location.reload();
    //   }, 50);
    // } else {
    //   if (error.response?.data?.errors) {
    //     Message.error({
    //       content: JSON.stringify(error.response?.data?.errors),
    //       duration: 5 * 1000,
    //     });
    //   } else {
    //     Message.error({
    //       content: `Request Error:${error.response?.status} ${error.response?.statusText}`,
    //       duration: 5 * 1000,
    //     });
    //   }
    // }
    return Promise.reject(error);
  }
);
