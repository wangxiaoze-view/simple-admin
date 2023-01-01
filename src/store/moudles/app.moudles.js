import { defineStore } from 'pinia';

import {
  sim_language,
  sim_theme,
  themeConfig,
  title,
  logo,
  i18n,
} from '@/config';
import { getLocalStorage } from '@/utils';

const { language } = getLocalStorage(sim_language);

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
    SET_LANGUAGE(language) {
      this.language = language;
      localStorage.setItem(sim_language, `{"language":"${language}"}`);
    },
  },
});
