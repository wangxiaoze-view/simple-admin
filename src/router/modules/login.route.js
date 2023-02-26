// 单独展示只需要将 isNotChild： 设置 true 按照下方代码参考

export default {
  path: '/login',
  name: 'Login',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'login',
    icon: 'fa-link',
    isNotChild: true,
  },
  children: [
    {
      path: '',
      name: 'LinkMd',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: 'md',
        icon: 'fa-pen-alt',
      },
    },
  ],
}
