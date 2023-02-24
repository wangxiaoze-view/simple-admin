import { defineStore } from 'pinia'
import { useCssVar } from '@vueuse/core'
import { ref } from 'vue'

import { getLocalStorage } from '@/utils/cookie/index'

const {
  sim_language,
  sim_theme,
  sim_device,
  sim_lock,
  themeConfig,
  title,
  logo,
  i18n,
} = require('@/config/index')

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
      // eslint-disable-next-line global-require,import/no-dynamic-require
      let variables = require(`/src/lib/styles/variables/${themeName}.module.scss`)

      console.log(variables, 1111)
      if (variables.default) variables = variables.default
      //
      Object.keys(variables).forEach((key) => {
        if (key.startsWith('vab-')) {
          useCssVar(key.replace('vab-', '--el-'), ref(null)).value =
            variables[key]
        }
      })

      document.body.style = this.theme.colorWeakness
        ? 'filter: invert(80%);-webkit-filter: invert(80%);'
        : ''
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
