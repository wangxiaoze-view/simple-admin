/**
 * @description 全局注册插件
 * @param app
 */

// 注册icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 注册store
import ElementPlus from 'element-plus'
import { setupStore } from '@/store'
// 注册router
import { setupRouter } from '@/router'
// 拦截错误日志
import { setupErrorLog } from '@/lib/plugins/errorLog'
// 字体
import { setupFont } from '@/lib/plugins/font'
// ele-css
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
// 全局样式
import '../styles/global.scss'
// mock数据
import '@/mock/index'

import '../../registerServiceWorker'

export default function setupInstall(app) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  setupErrorLog(app)

  app.use(ElementPlus)

  setupFont(app)

  setupStore(app)

  setupRouter(app)
    .isReady()
    .then(() => {
      app.mount('#app')
    })
}
