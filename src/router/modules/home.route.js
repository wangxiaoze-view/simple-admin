export default {
  path: '/home',
  name: 'Home',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'home',
    icon: 'HomeFilled',
  },
  children: [
    {
      path: 'workbench',
      name: 'HomeIndex',
      component: () => import('@/views/home/workbench/index.vue'),
      meta: {
        title: 'workbench',
        icon: 'HomeFilled',
        closable: true,
      },
    },
    {
      path: 'analyse',
      name: 'HomeAnalyse',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'analyse',
        icon: 'HomeFilled',
      },
    },
  ],
}
