export default {
  path: '/permission',
  name: 'Permission',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'permission',
    icon: 'Key',
  },
  children: [
    {
      path: 'role',
      name: 'PermissionRole',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'role',
        icon: '',
        fullPath: '/permission/role',
      },
    },
    {
      path: 'menu',
      name: 'PermissionMenu',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'menu',
        icon: '',
        fullPath: '/permission/menu',
      },
    },
  ],
}
