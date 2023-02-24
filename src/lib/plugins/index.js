import * as Elicons from '@element-plus/icons-vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupErrorLogs } from './errorLogs'

import 'element-plus/dist/index.css'
import '@/lib/styles/global.scss'
import '../../registerServiceWorker'
import '@/mock'

// 主题样式

export default function setupInstall(app) {
  setupErrorLogs(app)

  // icon 组件
  Object.keys(Elicons).forEach((key) => {
    app.component(key, Elicons[key])
  })

  // eslint-disable-next-line global-require
  const bgTheme = require.context('../styles/background', false, /\.scss$/)
  bgTheme.keys().map(bgTheme)

  setupStore(app)
  setupRouter(app)
    .isReady()
    .then(() => {
      app.mount('#app')
    })
}
