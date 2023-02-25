export default {
  path: '/comp',
  name: 'Comp',
  component: () => import('@/lib/layout/index.vue'),
  meta: {
    title: 'comp',
    icon: 'fa-layer-group',
  },
  children: [
    {
      path: 'table',
      name: 'CompTable',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'table',
        icon: 'fa-table',
        fullPath: '/comp/table',
      },
    },
    {
      path: 'transition',
      name: 'ComTransition',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'transition',
        icon: 'fa-meteor',
        fullPath: '/comp/transition',
      },
    },
    {
      path: 'clip',
      name: 'ComClip',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'clip',
        icon: 'fa-cut',
        fullPath: '/comp/clip',
      },
    },
    {
      path: 'countAuto',
      name: 'ComCountAuto',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'countAuto',
        icon: 'fa-sort-amount-up-alt',
        fullPath: '/comp/countAuto',
      },
    },
    {
      path: 'idea',
      name: 'ComIdea',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'idea',
        icon: 'fa-keyboard',
        fullPath: '/comp/idea',
      },
    },
    {
      path: 'tree',
      name: 'ComTree',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'tree',
        icon: 'fa-tree',
        fullPath: '/comp/tree',
      },
    },
    {
      path: 'verify',
      name: 'ComVerify',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'verify',
        icon: 'fa-fingerprint',
        fullPath: '/comp/verify',
      },
    },
    {
      path: 'qrcode',
      name: 'ComQrcode',
      component: () => import('@/views/home/analyse/index.vue'),
      meta: {
        title: 'qrcode',
        icon: 'fa-qrcode',
        fullPath: '/comp/qrcode',
      },
    },
  ],
}
