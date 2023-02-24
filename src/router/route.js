import HomeRoute from './routes/home'
import PermissionRoute from './routes/permission'
import FunRoute from './routes/fun'
import PageRoute from './routes/page'
import LinkRoute from './routes/link'
import ComponentRoute from './routes/component'
import { hanlderRoute } from '@/utils/handler.route'

// 固定路由
export const constantRoutes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home/index',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {},
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
]

// 动态异步路由
export const asyncRoutes = hanlderRoute([
  HomeRoute,
  PermissionRoute,
  FunRoute,
  PageRoute,
  LinkRoute,
  ComponentRoute,
])
