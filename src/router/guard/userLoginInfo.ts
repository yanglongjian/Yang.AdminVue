import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import { useUserStore, useTabBarStore } from '@/store';
import { isLogin } from '@/utils/auth';

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();


    if (to.name != 'collect-edit') {
      const tabBarStore = useTabBarStore();
      const i = tabBarStore.getTabList.findIndex(item => item.name == 'collect-edit');
      if (i > -1) {
        var tag=tabBarStore.getTabList[i];
        tabBarStore.deleteTag(i,tag);
      }
    }


    const userStore = useUserStore();
    if (isLogin()) {
      if (userStore.permissions) {
        next();
      } else {
        try {
          await userStore.info();
          next();
        } catch (error) {
          await userStore.logout();
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    } else {
      if (to.name === 'login') {
        next();
        return;
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
