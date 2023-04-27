import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';

export default function usePermission() {
  const userStore = useUserStore();
  return {
    accessRouter(route: any) {
      const permission = route.meta?.permission || '';
      const permissions= userStore.permissions as undefined as any;
      return (
        !route.meta?.requiresAuth ||
        !permission ||
        permissions.includes(permission)
      );
    },
    findFirstPermissionRoute(_routers: any, permission:any) {
      const cloneRouters = [..._routers];
      while (cloneRouters.length) {
        const firstElement = cloneRouters.shift();
        if (permission.includes(firstElement?.meta?.permissions))
          return { name: firstElement.name };
        if (firstElement?.children) {
          cloneRouters.push(...firstElement.children);
        }
      }
      return null;
    },
    // You can add any rules you want
  };
}
