export default {
  path: '/fun',
  name: 'Fun',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: '功能',
    icon: 'Connection',
  },
  children: [
    {
      path: 'flow',
      name: 'FunFlow',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '流程图',
        icon: '',
        fullPath: '/fun/flow',
      },
    },
    {
      path: 'echarts',
      name: 'FunEcharts',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '图表',
        icon: '',
        fullPath: '/fun/echarts',
      },
    },
    {
      path: 'print',
      name: 'FunPrint',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '打印',
        icon: '',
        fullPath: '/fun/print',
      },
    },
    {
      path: 'watermarking',
      name: 'FunWatermarking',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '水印',
        icon: '',
        fullPath: '/fun/watermarking',
      },
    },
    {
      path: 'drag',
      name: 'FunDrag',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '拖拽',
        icon: '',
        fullPath: '/fun/drag',
      },
    },
    {
      path: 'excel',
      name: 'FunExcel',
      component: () => import('@/views/base.vue'),
      meta: {
        title: 'excel',
        icon: '',
        fullPath: '/fun/excel',
      },
    },
    {
      path: 'preview',
      name: 'FunPreview',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '图片预览',
        icon: '',
        fullPath: '/fun/preview',
      },
    },
    {
      path: 'fullScreen',
      name: 'FunFullScreen',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '全屏',
        icon: '',
        fullPath: '/fun/fullScreen',
      },
    },
    {
      path: 'fullRipple',
      name: 'FunRipple',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '水波纹',
        icon: '',
        fullPath: '/fun/fullRipple',
      },
    },
    {
      path: 'upload',
      name: 'FunUpload',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '上传',
        icon: '',
        fullPath: '/fun/upload',
      },
    },
    {
      path: 'down',
      name: 'FunFown',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '文件下载',
        icon: '',
        fullPath: '/fun/down',
      },
    },
    {
      path: 'socket',
      name: 'FunSocket',
      component: () => import('@/views/base.vue'),
      meta: {
        title: 'Web Socket',
        icon: '',
        fullPath: '/fun/socket',
      },
    },
  ],
}
