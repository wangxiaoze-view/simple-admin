export default {
  path: '/link',
  name: 'Link',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: '外链',
    icon: 'Link',
  },
  children: [
    {
      path: 'md',
      name: 'LinkMd',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '主页',
        icon: '',
        fullPath: '/link/md',
      },
    },
  ],
}
