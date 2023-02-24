import axios from 'axios'
import VueCookies from 'vue-cookies'
import { simNotice } from '@/utils/ele'

import { sim_token } from '@/config'

const instance = axios.create({
  timeout: 20000,
  withCredentials: false,
})

instance.interceptors.request.use(
  (config) => {
    // 在这里一般会携带前台的参数发送给后台，
    const token = VueCookies.get(sim_token) || ''
    config.headers = {
      token,
      sysCode: 'sim',
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // 根据你的项目实际情况来对 response 和 error 做处理
    const { status, message } = response.data
    if (status !== 200) {
      simNotice({
        title: '错误提示🙅：',
        message,
        type: 'error',
      })

      // return Promise.reject(response.data)
    }
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
