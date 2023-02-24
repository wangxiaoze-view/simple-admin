export default {
  path: '/permission',
  name: 'Permission',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: '权限管理',
    icon: 'Key',
  },
  children: [
    {
      path: 'role',
      name: 'PermissionRole',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '角色权限',
        icon: '',
        fullPath: '/permission/role',
      },
    },
    {
      path: 'menu',
      name: 'PermissionMenu',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '菜单角色',
        icon: '',
        fullPath: '/permission/menu',
      },
    },
  ],
}
