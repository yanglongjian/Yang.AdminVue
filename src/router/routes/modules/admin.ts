import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/admin',
    name: 'admin',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: '系统管理',
        requiresAuth: true,
        icon: 'icon-list',
        order: 2,
        roles: ['Root.Admin'],
    },
    children: [
        {
            path: 'users',
            name: 'users',
            component: () => import('@/views/admin/user.vue'),
            meta: {
                locale: '账号管理',
                requiresAuth: true,
                icon: 'icon-user',
                permission:'Root.Admin.User'
            },
        },
        {
            path: 'profile',
            name: 'profile',
            component: () => import('@/views/admin/profile.vue'),
            meta: {
                locale: '用户信息',
                requiresAuth: true,
                hideInMenu:true,
            },
        },
        {
            path: 'role',
            name: 'role',
            component: () => import('@/views/admin/role.vue'),
            meta: {
                locale: '角色管理',
                requiresAuth: true,
                icon: 'icon-user-group',
                permission:'Root.Admin.Role'
            },
        },
        {
            path: 'module',
            name: 'module',
            component: () => import('@/views/admin/module.vue'),
            meta: {
                locale: '模块管理',
                requiresAuth: true,
                icon: 'icon-apps',
                permission:'Root.Admin.Module'
            },
        },
    ],
};

export default LIST;
