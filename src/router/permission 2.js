import SimProgress from 'nprogress'
import { UserMoudleStore } from '@/store/moudles/user.moudles'
import { getPageTitle } from '@/utils/translate'

export default function SetupPermission(router) {
  try {
    const store = UserMoudleStore()
    router.beforeEach((to, from, next) => {
      SimProgress.start()
      const token = store.GET_TOKEN || ''
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
