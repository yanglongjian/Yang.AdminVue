import type { Router, RouteRecordNormalized } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import usePermission from '@/hooks/permission';
import { useUserStore, useAppStore } from '@/store';
import { appRoutes } from '../routes';
import { WHITE_LIST, NOT_FOUND } from '../constants';

export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    const Permission = usePermission();
    const permissionsAllow = Permission.accessRouter(to);
   
    if (permissionsAllow) next();
      else {
        const destination =
          Permission.findFirstPermissionRoute(appRoutes, userStore.permissions) ||
          NOT_FOUND;
        next(destination);
      }


    NProgress.done();
  });
}
