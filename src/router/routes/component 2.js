export default {
  path: '/comp',
  name: 'Comp',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: '组件',
    icon: 'Compass',
  },
  children: [
    {
      path: 'table',
      name: 'CompTable',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '表格',
        icon: '',
        fullPath: '/comp/table',
      },
    },
    {
      path: 'transition',
      name: 'ComTransition',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '动画',
        icon: '',
        fullPath: '/comp/transition',
      },
    },
    {
      path: 'clip',
      name: 'ComClip',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '图片裁剪',
        icon: '',
        fullPath: '/comp/clip',
      },
    },
    {
      path: 'countAuto',
      name: 'ComCountAuto',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '数字自增',
        icon: '',
        fullPath: '/comp/countAuto',
      },
    },
    {
      path: 'idea',
      name: 'ComIdea',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '编辑器',
        icon: '',
        fullPath: '/comp/idea',
      },
    },
    {
      path: 'tree',
      name: 'ComTree',
      component: () => import('@/views/base.vue'),
      meta: {
        title: 'Tree',
        icon: '',
        fullPath: '/comp/tree',
      },
    },
    {
      path: 'verify',
      name: 'ComVerify',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '安全验证',
        icon: '',
        fullPath: '/comp/verify',
      },
    },
    {
      path: 'qrcode',
      name: 'ComQrcode',
      component: () => import('@/views/base.vue'),
      meta: {
        title: '二维码',
        icon: '',
        fullPath: '/comp/qrcode',
      },
    },
  ],
}
