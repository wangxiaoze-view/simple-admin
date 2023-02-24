import { useDebounceFn } from '@vueuse/core'
import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import { AppModuleStore } from '@/store/modules/app.module'

const WIDTH = 992
function getDeviceW() {
  const rect = document.body.getBoundingClientRect()
  return rect.width - 1 < WIDTH
}
const store = AppModuleStore()

export default function useResponsive(immediate = true) {
  function resizeHandler() {
    if (!document.hidden) {
      const isMobile = getDeviceW()
      store.SET_DEVICE(isMobile ? 'mobile' : 'desktop')
      if (store.GET_DEVICE === 'mobile') {
        store.SET_THEME({ collapse: false })
        store.SET_IS_LOCK(false)
      } else {
        store.SET_THEME({ collapse: isMobile })
      }
    }
  }
  const debounceFn = useDebounceFn(resizeHandler, 100)
  onMounted(() => {
    if (immediate) debounceFn().then(() => {})
  })
  onBeforeMount(() => {
    window.addEventListener('resize', debounceFn)
  })
  onBeforeUnmount(() => {
    window.addEventListener('resize', debounceFn)
  })
}
