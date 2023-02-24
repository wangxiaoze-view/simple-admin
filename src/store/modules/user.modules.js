import { defineStore } from 'pinia'
import { getCookies, setCookies } from '@/utils/cookie/index'
import { cacheConfig } from '@/config'
import UserProxy from '@/api/user/index'

const { sim_token, sim_user_info } = cacheConfig

export const UserModuleStore = defineStore('UserModuleStore', {
  state: () => ({
    token: getCookies(sim_token) || '',
    userInfo: getCookies(sim_user_info) || undefined,
    cacheTime: '7d',
  }),
  getters: {
    GET_TOKEN: (state) => state.token,
    GET_USER_INFO: (state) => state.userInfo,
  },
  actions: {
    SET_USER_TOKEN(token) {
      this.token = token
      setCookies(sim_token, token, this.cacheTime)
    },
    SET_USER_INFO(userInfo) {
      this.userInfo = userInfo
      setCookies(sim_user_info, userInfo, this.cacheTime)
    },
    async SET_LOGIN(userParams) {
      const { data = null } = await UserProxy.login(userParams)
      if (data && data.token) {
        this.SET_USER_TOKEN(data.token)
        this.SET_USER_INFO(data)
      }
      return data
    },
    SET_LOGOUT() {},
  },
})
