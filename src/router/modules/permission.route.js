export default {
  path: '/permission',
  name: 'Permission',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'permission',
    icon: 'fa-key',
  },
  children: [
    {
      path: 'role',
      name: 'PermissionRole',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'role',
        icon: 'fa-user-tag',
        fullPath: '/permission/role',
      },
    },
    {
      path: 'menu',
      name: 'PermissionMenu',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'menu',
        icon: 'fa-bars',
        fullPath: '/permission/menu',
      },
    },
  ],
}
