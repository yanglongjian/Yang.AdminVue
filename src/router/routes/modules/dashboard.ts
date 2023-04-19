import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '仪表盘',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 1,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: '工作台',
        requiresAuth: true,
        icon:'icon-compass',
        roles: ['*'],
      },
    },
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: {
        locale: '实时监控',
        requiresAuth: true,
        hideInMenu:false,
        icon:'icon-desktop',
        roles: ['*'],
      },
    },
    {
      path: 'data-analysis',
      name: 'DataAnalysis',
      component: () => import('@/views/dashboard/data-analysis/index.vue'),
      meta: {
        locale: '分析页',
        requiresAuth: true,
        hideInMenu:false,
        icon:'icon-computer',
        roles: ['*'],
      },
    },
    {
      path: 'multi-data-analysis',
      name: 'MultiDimensionDataAnalysis',
      component: () =>
        import('@/views/dashboard/multi-data-analysis/index.vue'),
      meta: {
        locale: '多维数据分析',
        requiresAuth: true,
        hideInMenu:false,
        icon:'icon-bar-chart',
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
