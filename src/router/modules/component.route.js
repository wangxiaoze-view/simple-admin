export default {
  path: '/comp',
  name: 'Comp',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'comp',
    icon: 'Compass',
  },
  children: [
    {
      path: 'table',
      name: 'CompTable',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'table',
        icon: '',
        fullPath: '/comp/table',
      },
    },
    {
      path: 'transition',
      name: 'ComTransition',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'transition',
        icon: '',
        fullPath: '/comp/transition',
      },
    },
    {
      path: 'clip',
      name: 'ComClip',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'clip',
        icon: '',
        fullPath: '/comp/clip',
      },
    },
    {
      path: 'countAuto',
      name: 'ComCountAuto',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'countAuto',
        icon: '',
        fullPath: '/comp/countAuto',
      },
    },
    {
      path: 'idea',
      name: 'ComIdea',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'idea',
        icon: '',
        fullPath: '/comp/idea',
      },
    },
    {
      path: 'tree',
      name: 'ComTree',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'tree',
        icon: '',
        fullPath: '/comp/tree',
      },
    },
    {
      path: 'verify',
      name: 'ComVerify',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'verify',
        icon: '',
        fullPath: '/comp/verify',
      },
    },
    {
      path: 'qrcode',
      name: 'ComQrcode',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'qrcode',
        icon: '',
        fullPath: '/comp/qrcode',
      },
    },
  ],
}
