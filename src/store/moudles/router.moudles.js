/* eslint-disable global-require */
import { defineStore } from 'pinia'
import { asyncRoutes } from '@/router/route'
import { hanlderRoute } from '@/utils/handler.route'

const routes = hanlderRoute(asyncRoutes, true)
console.log(routes, 'routes')

function getDefaultRoute() {
  // /home
  const findRoute = routes.find((route) => route.path === '/home')
  if (findRoute) {
    findRoute.children = findRoute.children || []
    const child = findRoute.children.find(
      (item) => item.meta.fullPath === '/home/index'
    )
    if (child) return child.meta.fullPath
  }
}
export const RouterMoudleStore = defineStore('RouterMoudleStore', {
  state: () => ({
    defaultRoute: getDefaultRoute(),
    checkedRouter: [],
  }),
  getters: {
    GET_DEFAULT_ROUTE: (state) => state.defaultRoute,
    // 选择，添加的路由
    GET_CHECKED_ROUTER: (state) => state.checkedRouter,
  },
  actions: {
    // 设置默认路由
    SET_DEFAULT_ROUTE(route) {
      this.defaultRoute = route.fullPath
    },
    // 添加新路由
    ADD_ROUTER(route) {
      const isExist = this.checkedRouter.find(
        (item) => item.meta.fullPath === route.meta.fullPath
      )
      if (!isExist) {
        this.checkedRouter.push(route)
      }

      console.log(this.checkedRouter, 'this.checkedRouter')
    },
  },
})
