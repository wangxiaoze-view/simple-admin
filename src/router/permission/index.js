import SimProgress from '@/lib/plugins/progress'

import { UserModuleStore } from '@/store/modules/user.modules'
import { getPageTitle } from '@/hooks/translate/index'

export default function SetupPermission(router) {
  try {
    // const store = UserModuleStore();
    router.beforeEach((to, from, next) => {
      SimProgress.start()
      const token = UserModuleStore().GET_TOKEN || ''
      if (
        token ||
        ['/login', '/register', '/callback', '/404', '/403'].includes(to.path)
      ) {
        next()
      } else {
        next({ path: '/login', replace: true })
      }
    })

    router.afterEach((to) => {
      document.title = getPageTitle(to.meta.title)
      SimProgress.done()
    })
  } catch (error) {
    console.log(error)
  }
}
