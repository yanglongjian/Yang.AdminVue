import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/cms',
    name: 'cms',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'CMS',
        requiresAuth: true,
        icon: 'icon-qq-zone',
        order: 2,
        permission: 'Root.CMS',
    },
    children: [
        {
            path: 'bnaner',
            name: 'bnaner',
            component: () => import('@/views/cms/bnaner.vue'),
            meta: {
                locale: 'Bnaner管理',
                requiresAuth: true,
                icon: 'icon-image',
                permission: 'Root.CMS.Bnaner',
            },
        },
        {
            path: 'channel',
            name: 'channel',
            component: () => import('@/views/cms/channel.vue'),
            meta: {
                locale: '栏目管理',
                requiresAuth: true,
                icon: 'icon-mind-mapping',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'article',
            name: 'article',
            component: () => import('@/views/cms/article.vue'),
            meta: {
                locale: '文章管理',
                requiresAuth: true,
                icon: 'icon-book',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'video',
            name: 'video',
            component: () => import('@/views/cms/video.vue'),
            meta: {
                locale: '视频管理',
                requiresAuth: true,
                icon: 'icon-video-camera',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'tags',
            name: 'tags',
            component: () => import('@/views/cms/tags.vue'),
            meta: {
                locale: '标签管理',
                requiresAuth: true,
                icon: 'icon-tags',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'material',
            name: 'material',
            component: () => import('@/views/cms/material.vue'),
            meta: {
                locale: '素材管理',
                requiresAuth: true,
                icon: 'icon-file',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'gather',
            name: 'gather',
            component: () => import('@/views/cms/gather.vue'),
            meta: {
                locale: '采集管理',
                requiresAuth: true,
                icon: 'icon-bug',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'links',
            name: 'links',
            component: () => import('@/views/cms/links.vue'),
            meta: {
                locale: '友情链接',
                requiresAuth: true,
                icon: 'icon-link',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'advert',
            name: 'advert',
            component: () => import('@/views/cms/advert.vue'),
            meta: {
                locale: '广告管理',
                requiresAuth: true,
                icon: 'icon-live-broadcast',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'notice',
            name: 'notice',
            component: () => import('@/views/cms/notice.vue'),
            meta: {
                locale: '系统公告',
                requiresAuth: true,
                icon: 'icon-sound',
                permission: 'Root.CMS.Channel',
            },
        },
        {
            path: 'config',
            name: 'config',
            component: () => import('@/views/cms/config.vue'),
            meta: {
                locale: '站点配置',
                requiresAuth: true,
                icon: 'icon-settings',
                permission: 'Root.CMS.Channel',
            },
        }
    ],
};

export default LIST;
