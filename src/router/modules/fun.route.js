export default {
  path: '/fun',
  name: 'Fun',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'fun',
    icon: 'Connection',
  },
  children: [
    {
      path: 'flow',
      name: 'FunFlow',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'flow',
        icon: '',
        fullPath: '/fun/flow',
      },
    },
    {
      path: 'echarts',
      name: 'FunEcharts',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'echarts',
        icon: '',
        fullPath: '/fun/echarts',
      },
    },
    {
      path: 'print',
      name: 'FunPrint',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'print',
        icon: '',
        fullPath: '/fun/print',
      },
    },
    {
      path: 'watermarking',
      name: 'FunWatermarking',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'watermarking',
        icon: '',
        fullPath: '/fun/watermarking',
      },
    },
    {
      path: 'drag',
      name: 'FunDrag',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'drag',
        icon: '',
        fullPath: '/fun/drag',
      },
    },
    {
      path: 'excel',
      name: 'FunExcel',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'excel',
        icon: '',
        fullPath: '/fun/excel',
      },
    },
    {
      path: 'preview',
      name: 'FunPreview',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'preview',
        icon: '',
        fullPath: '/fun/preview',
      },
    },
    {
      path: 'fullScreen',
      name: 'FunFullScreen',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'fullScreen',
        icon: '',
        fullPath: '/fun/fullScreen',
      },
    },
    {
      path: 'fullRipple',
      name: 'FunRipple',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'fullRipple',
        icon: '',
        fullPath: '/fun/fullRipple',
      },
    },
    {
      path: 'upload',
      name: 'FunUpload',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'upload',
        icon: '',
        fullPath: '/fun/upload',
      },
    },
    {
      path: 'down',
      name: 'FunDown',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'down',
        icon: '',
        fullPath: '/fun/down',
      },
    },
    {
      path: 'socket',
      name: 'FunSocket',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'Web Socket',
        icon: '',
        fullPath: '/fun/socket',
      },
    },
  ],
}
