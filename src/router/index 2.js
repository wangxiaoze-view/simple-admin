import { createRouter, createWebHashHistory } from 'vue-router'

import setupPermission from './permission'
import { constantRoutes, asyncRoutes } from './route'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [...constantRoutes, ...asyncRoutes],
})

export function setupRouter(app) {
  setupPermission(router)
  app.use(router)
  return router
}

export default router
