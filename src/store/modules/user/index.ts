import { defineStore } from 'pinia';
import md5 from "js-md5";
import {
  token as userLogin,
  logout as userLogout,
  profile as getUserInfo
} from '@/api/admin/identity';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import useAppStore from '../app';

const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: undefined,
    permissions:undefined,
  }),
  actions: {
    // Set user's information
    setInfo(data: any) {
      this.$patch({
        userInfo: data,
        permissions: data.permissionList
      });
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      const res = await getUserInfo();
      this.setInfo(res.data);
    },

    // Login
    async login(loginForm: any) {
      try {
        var data = {
          account: '',
          password: '',
          verifyId: '',
          verifyCode: ''
        };
        Object.assign(data, loginForm);
        //data.password = md5(data.password);
        const res: any = await userLogin(data);
        setToken(res.data.accessToken, res.data.refreshToken);
      } catch (err) {
        clearToken();
        throw err;
      }
    },


    //登出回调
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },

    // Logout 
    async logout() {
      try {
        await userLogout();
      } finally {
        this.logoutCallBack();
      }
    },
  },
});

export default useUserStore;
