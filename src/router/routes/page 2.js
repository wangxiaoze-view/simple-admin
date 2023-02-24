export default {
  path: '/page',
  name: 'Page',
  component: import('@/lib/layout/index.vue'),
  meta: {
    title: '页面',
    icon: 'Notification',
  },
  children: [
    {
      path: 'form',
      name: 'PageForm',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '表单',
        icon: '',
        fullPath: '/page/form',
      },
    },
    {
      path: 'result',
      name: 'PageResult',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '结果',
        icon: '',
        fullPath: '/page/result',
      },
    },
    {
      path: 'error',
      name: 'PageError',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '异常',
        icon: '',
        fullPath: '/page/error',
      },
    },
    {
      path: 'list',
      name: 'PageList',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '列表',
        icon: '',
        fullPath: '/page/list',
      },
    },
  ],
}
