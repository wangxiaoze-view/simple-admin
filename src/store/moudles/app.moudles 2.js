/* eslint-disable global-require */
import { defineStore } from 'pinia'
import { useCssVar } from '@vueuse/core'
import { ref } from 'vue'

import {
  sim_language,
  sim_theme,
  themeConfig,
  title,
  logo,
  i18n,
} from '@/config'
import { getLocalStorage } from '@/utils'

const { language } = getLocalStorage(sim_language)

export const AppMoudleStore = defineStore('AppMoudleStore', {
  state: () => ({
    title, // 网站标题
    logo, // 网站logo
    device: 'desktop', // 设备  desktop  mobile
    language: language || i18n || 'zh', // 语言, 默认显示中文
    theme: getLocalStorage(sim_theme) || { ...themeConfig }, // 主题
  }),
  getters: {
    // 语言
    GET_LANGUAGE: (state) => state.language,
    // 设置
    GET_DEVICE: (state) => state.device,
    // theme
    GET_THEME: (state) => state.theme,
  },
  actions: {
    // 设置语言
    SET_LANGUAGE(language) {
      this.language = language
      localStorage.setItem(sim_language, `{"language":"${language}"}`)
    },

    // 设置主题
    SET_THEME() {
      localStorage.setItem(sim_theme, JSON.stringify(this.theme))
    },
    // 主题重置
    RESET_THEME() {
      this.theme = { ...themeConfig }
      localStorage.removeItem('theme')
      this.UPDATE_THEME()
    },
    // 更新主题
    UPDATE_THEME() {
      // 默认紫色 主题色
      const themeName = this.theme.themeName || 'purple'
      const bgName = this.theme.bgName || 'grey'
      // eslint-disable-next-line import/no-dynamic-require
      const variables = require(`@/lib/styles/variables/${themeName}.modules.scss`)
      Object.keys(variables).forEach((key) => {
        if (key.startsWith('sim-')) {
          useCssVar(key.replace('sim-', '--el-'), ref(null)).value =
            variables[key]
        }
      })

      // 设置背景色的 class Name
      document.getElementsByTagName('body')[0].className = `sim-theme-${bgName}`
    },

    // 菜单缩放
    TOGGLE_COLLAPSE() {
      this.theme.collapse = !this.theme.collapse
      localStorage.setItem(sim_theme, JSON.stringify(this.theme))
    },
  },
})
