import { createApp } from 'vue'
import App from './App.vue'
import setupInstall from './lib/plugins'

const app = createApp(App)

app.config.errorHandler = (error) => {
  console.log('catch error', error)
}
setupInstall(app)
