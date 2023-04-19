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
                roles: ['Root.Admin.User'],
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
                roles: ['Root.Admin.Role'],
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
                roles: ['Root.Admin.Module'],
            },
        },
        {
            path: 'dict',
            name: 'dict',
            component: () => import('@/views/admin/dict.vue'),
            meta: {
                locale: '数据字典',
                requiresAuth: true,
                icon: 'icon-storage',
                roles: ['Root.Admin.Dict'],
            },
        },
        {
            path: 'server',
            name: 'server',
            component: () => import('@/views/admin/server.vue'),
            meta: {
                locale: '服务器信息',
                requiresAuth: true,
                icon: 'icon-computer',
                roles: ['Root.Admin.Server'],
            },
        }
    ],
};

export default LIST;
