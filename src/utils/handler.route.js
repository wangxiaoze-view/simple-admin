import { resolve } from 'path'

/**
 * @description 处理路由，包括权限
 * @param {*} routes 路由
 * @param {*} isAuthority 是否进行权限控制
 * @param {*} pathBaseUrl 基础路由，也就是一级
 * @returns
 */
export function hanlderRoute(routes, isAuthority = false, pathBaseUrl = '') {
  // 权限
  const filterPermissions = routes.filter((route) =>
    isAuthority && route.meta.permissions ? route.meta.permissions : true
  )

  filterPermissions.flatMap((route) => {
    return pathBaseUrl !== '/' && route.children ? [...route.children] : route
  })

  filterPermissions.map((route) => {
    route.meta.fullPath =
      route.path !== '*' ? resolve(pathBaseUrl, route.path) : route.path

    if (route.children && route.children.length > 0) {
      route.children = hanlderRoute(route.children, isAuthority, route.path)
    }
    return route
  })

  return filterPermissions
}

// 处理tabs
export function handleTabs(route) {
  if (route.name) {
    return {
      path: route.meta.fullPath,
      query: route.query || {},
      params: route.params || {},
      name: route.name,
      meta: { ...route.meta },
    }
  }
}
