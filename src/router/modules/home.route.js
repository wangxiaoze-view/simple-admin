export default {
  path: '/home',
  name: 'Home',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'home',
    icon: 'home-alt',
  },
  children: [
    {
      path: 'workbench',
      name: 'HomeIndex',
      component: () => import('@/views/home/workbench/index.vue'),
      meta: {
        title: 'workbench',
        icon: 'briefcase',
      },
    },
    {
      path: 'analyse',
      name: 'HomeAnalyse',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'analyse',
        icon: 'fa-chart-line',
      },
    },
  ],
}
