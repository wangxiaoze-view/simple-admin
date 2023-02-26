// 固定路由
import HomeRoute from '../modules/home.route'
import PermissionRoute from '../modules/permission.route'
import FunRoute from '../modules/fun.route'
import PageRoute from '../modules/page.route'
import LinkRoute from '../modules/link.route'
import ComponentRoute from '../modules/component.route'
// 单独展示，
// import LoginRoute from '../modules/login.route'

export const constantRoutes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home/workbench',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]

// 动态异步路由
export const asyncRoutes = [
  HomeRoute,
  PermissionRoute,
  FunRoute,
  PageRoute,
  LinkRoute,
  ComponentRoute,
  // LoginRoute,
]
