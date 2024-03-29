import { REDIRECT_ROUTE_NAME } from '@/router/constants';
import { AppRouteRecordRaw } from './types';

export const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue');

export const REDIRECT_MAIN: AppRouteRecordRaw = {
  path: '/redirect',
  name: 'redirectWrapper',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    hideInMenu: true,
  },
  children: [
    {
      path: 'forbidden',
      name: 'forbidden',
      component: () => import('@/views/redirect/403.vue'),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
    {
      path: '/redirect/:path',
      name: REDIRECT_ROUTE_NAME,
      component: () => import('@/views/redirect/index.vue'),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};

export const NOT_FOUND_ROUTE = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/redirect/404.vue'),
};
