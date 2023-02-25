export default {
  path: '/page',
  name: 'Page',
  component: import('@/lib/layout/index.vue'),
  meta: {
    title: 'page',
    icon: 'fa-file-alt',
  },
  children: [
    {
      path: 'form',
      name: 'PageForm',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'form',
        icon: 'fa-shield-alt',
        fullPath: '/page/form',
      },
    },
    {
      path: 'result',
      name: 'PageResult',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'result',
        icon: 'fa-thumbs-up',
        fullPath: '/page/result',
      },
    },
    {
      path: 'error',
      name: 'PageError',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: '异常',
        icon: 'fa-bug',
        fullPath: '/page/error',
      },
    },
    {
      path: 'list',
      name: 'PageList',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'list',
        icon: 'fa-list',
        fullPath: '/page/list',
      },
    },
  ],
}
