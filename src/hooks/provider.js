import i18n from '@/i18n'

/**
 * @description 全局配置文件
 * @returns {{button: {autoInsertSpace: boolean}, size: string, locale: *, message: {max: number}, zIndex: number}}
 */
export default function getProvider() {
  const { locale, messages } = i18n().global
  return {
    locale: messages[locale],
    size: 'default',
    zIndex: 10,
    button: {
      autoInsertSpace: true,
    },
    message: {
      max: 10,
    },
  }
}
