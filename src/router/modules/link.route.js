export default {
  path: '/link',
  name: 'Link',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'link',
    icon: 'Link',
  },
  children: [
    {
      path: 'md',
      name: 'LinkMd',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'md',
        icon: '',
        fullPath: '/link/md',
      },
    },
  ],
}
