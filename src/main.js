import { createApp } from 'vue'
import App from './App.vue'

import setupInstall from '@/lib/plugins/index'

setupInstall(createApp(App))
