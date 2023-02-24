import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import { computed } from 'vue'
import { AppMoudleStore } from '@/store/moudles/app.moudles'
import zh from './zh'
import en from './en'

export default function i18n() {
  const app = AppMoudleStore()

  const messages = {
    en: {
      ...en,
      ...enLocale,
    },
    zh: {
      ...zh,
      ...zhLocale,
    },
  }

  const getLocal = computed(() => {
    return app.GET_LANGUAGE || 'zh'
  })

  return createI18n({
    locale: getLocal.value,
    messages,
  })
}
