export default {
  path: '/fun',
  name: 'Fun',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'fun',
    icon: 'fa-drafting-compass',
  },
  children: [
    {
      path: 'flow',
      name: 'FunFlow',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'flow',
        icon: 'fa-share-alt',
        fullPath: '/fun/flow',
      },
    },
    {
      path: 'echarts',
      name: 'FunEcharts',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'echarts',
        icon: 'chart-bar',
        fullPath: '/fun/echarts',
      },
    },
    {
      path: 'print',
      name: 'FunPrint',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'print',
        icon: 'fa-print',
        fullPath: '/fun/print',
      },
    },
    {
      path: 'watermarking',
      name: 'FunWatermarking',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'watermarking',
        icon: 'fa-burn',
        fullPath: '/fun/watermarking',
      },
    },
    {
      path: 'drag',
      name: 'FunDrag',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'drag',
        icon: 'fa-arrows-alt',
        fullPath: '/fun/drag',
      },
    },
    {
      path: 'excel',
      name: 'FunExcel',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'excel',
        icon: 'fa-file-csv',
        fullPath: '/fun/excel',
      },
    },
    {
      path: 'preview',
      name: 'FunPreview',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'preview',
        icon: 'fa-file-pdf',
        fullPath: '/fun/preview',
      },
    },
    {
      path: 'fullScreen',
      name: 'FunFullScreen',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'fullScreen',
        icon: 'fa-expand-arrows-alt',
        fullPath: '/fun/fullScreen',
      },
    },
    {
      path: 'fullRipple',
      name: 'FunRipple',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'fullRipple',
        icon: 'fa-water',
        fullPath: '/fun/fullRipple',
      },
    },
    {
      path: 'upload',
      name: 'FunUpload',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'upload',
        icon: 'fa-cloud-upload',
        fullPath: '/fun/upload',
      },
    },
    {
      path: 'down',
      name: 'FunDown',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'down',
        icon: 'fa-cloud-download',
        fullPath: '/fun/down',
      },
    },
    {
      path: 'socket',
      name: 'FunSocket',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'Web Socket',
        icon: 'fa-ethernet',
        fullPath: '/fun/socket',
      },
    },
  ],
}
