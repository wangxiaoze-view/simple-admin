export default {
  path: '/home',
  name: 'Home',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: '首页',
    icon: 'HomeFilled',
  },
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      component: () => import('@/views/home/worktable/index.vue'),
      meta: {
        title: '工作台',
        icon: '',
        noCloseTab: true,
      },
    },
    {
      path: 'console',
      name: 'HomeConsole',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '分析台',
        icon: '',
      },
    },
  ],
}
