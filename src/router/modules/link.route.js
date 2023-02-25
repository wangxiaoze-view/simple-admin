export default {
  path: '/link',
  name: 'Link',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'link',
    icon: 'fa-link',
  },
  children: [
    {
      path: 'md',
      name: 'LinkMd',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'md',
        icon: 'fa-pen-alt',
        fullPath: '/link/md',
      },
    },
  ],
}
