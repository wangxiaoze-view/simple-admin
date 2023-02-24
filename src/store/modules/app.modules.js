import { defineStore } from 'pinia'
import { useCssVar } from '@vueuse/core'
import { ref } from 'vue'
import { cacheConfig, themeConfig, setConfig } from '@/config'

import { getLocalStorage } from '@/utils/cookie/index'

const { sim_language, sim_theme, sim_device, sim_lock } = cacheConfig
const { title, logo, i18n } = setConfig

const { language } = getLocalStorage(sim_language)
const { device } = getLocalStorage(sim_device)
const { isLock } = getLocalStorage(sim_lock)

export const AppModuleStore = defineStore('AppModuleStore', {
  state: () => ({
    title, // 网站标题
    logo, // 网站logo
    device: device || 'desktop', // 设备  desktop  mobile
    language: language || i18n || 'zh', // 语言, 默认显示中文
    isLock: isLock || false, // 是否显示锁屏页面
    theme: getLocalStorage(sim_theme)
      ? { ...themeConfig, ...getLocalStorage(sim_theme) }
      : { ...themeConfig }, // 主题
  }),
  getters: {
    // 语言
    GET_LANGUAGE: (state) => state.language,
    // 设置
    GET_DEVICE: (state) => state.device,
    // 锁屏
    GET_IS_LOCK: (state) => state.isLock,
    // theme
    GET_THEME: (state) => state.theme,
  },
  actions: {
    // 设置语言
    SET_LANGUAGE(language) {
      this.language = language
      localStorage.setItem(sim_language, `{"language":"${language}"}`)
    },

    // 设置锁屏
    SET_IS_LOCK(isLock) {
      this.isLock = isLock
      localStorage.setItem(
        sim_lock,
        JSON.stringify({
          isLock,
        })
      )
    },

    // 设置主题
    SET_THEME(theme) {
      this.theme = Object.assign(this.theme, { ...theme })
      localStorage.setItem(sim_theme, JSON.stringify(this.theme))
      this.UPDATE_THEME()
    },
    // 主题重置
    RESET_THEME() {
      this.theme = { ...themeConfig }
      localStorage.setItem(sim_theme, JSON.stringify(this.theme))
      this.UPDATE_THEME()
    },
    // 更新主题
    UPDATE_THEME() {
      // 默认紫色 主题色
      const themeName = this.theme.themeName || 'purple'
      const modules = import.meta.glob(
        '/src/lib/styles/variables/*.module.scss',
        { eager: true }
      )

      // eslint-disable-next-line guard-for-in
      for (const path in modules) {
        const arr = path.split('/').filter((name) => name !== '')
        const name = arr[arr.length - 1].split('.')[0]
        if (themeName === name) {
          Object.keys(modules[path].default).forEach((key) => {
            useCssVar(key.replace('sim-', '--el-'), ref(null)).value =
              modules[path].default[key]
          })
          break
        }
      }

      document.body.style = this.theme.colorWeakness
        ? 'filter: invert(80%);-webkit-filter: invert(80%);'
        : ''

      // 这写法会报警告，但是可以正常执行
      // import(`/src/lib/styles/variables/${themeName}.module.scss`).then(
      //   (res) => {
      //     Object.keys(res.default).forEach((key) => {
      //       useCssVar(key.replace('sim-', '--el-'), ref(null)).value =
      //         res.default[key];
      //     });
      //   }
      // );

      // 注意： 在webpack中可以使用require，但是在vite中使用这个，glob只能是字符串，不能拼接
      // const variables = import.meta.glob(
      //   `@/lib/styles/variables/purple.module.scss`,
      //   { eager: true }
      // );
    },

    // 菜单缩放
    TOGGLE_COLLAPSE() {
      this.theme.collapse = !this.theme.collapse
      localStorage.setItem(sim_theme, JSON.stringify(this.theme))
    },

    // 设置设备表示
    SET_DEVICE(device) {
      this.device = device
      localStorage.setItem(sim_device, `{"device":"${this.device}"}`)
    },
  },
})
