import { createRouter, createWebHashHistory } from 'vue-router'

import { constantRoutes, asyncRoutes } from '@/router/routes'
import setupPermission from './permission'

const router = createRouter({
  history: createWebHashHistory(),
  // 待优化;
  routes: [...constantRoutes, ...asyncRoutes],
})

export function setupRouter(app) {
  setupPermission(router)
  app.use(router)
  return router
}

export default router
