import axios from 'axios'
import VueCookies from 'vue-cookies'
import { cacheConfig } from '@/config'
import { simNotice } from '@/utils/ele'

const { sim_token } = cacheConfig

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
      author: 'Wang-Xiao-Ze',
      email: 'wangxiaoze@petalmail.com',
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
    const { status, code, message = '' } = response.data
    if ((status && status !== 200) || (code && code !== '200')) {
      simNotice({
        title: '请求失败',
        message: message || '请求异常：系统开小差',
        type: 'error',
      })
      return Promise.reject(response.data)
    }

    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
