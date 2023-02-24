import { defineStore } from 'pinia'
import { getCookies, setCookies } from '@/utils'
import { sim_token, sim_user } from '@/config'
import UserProxy from '@/api/user.proxy'

export const UserMoudleStore = defineStore('UserMoudleStore', {
  state: () => ({
    token: getCookies(sim_token) || '', // token
    userInfo: getCookies(sim_user) || {}, // userInfo
  }),
  getters: {
    GET_TOKEN: (state) => state.token,
    GET_USERINFO: (state) => state.userInfo,
  },
  actions: {
    SET_TOKEN(token) {
      this.token = token
      setCookies(sim_token, token, '7d')
    },
    SET_USERINFO(userInfo) {
      this.userInfo = userInfo
      setCookies(sim_user, userInfo, '7d')
    },
    async TO_LOGIN(userParams) {
      const { data = null } = await UserProxy.login(userParams)
      if (data && data.token) {
        this.SET_TOKEN(data.token)
        this.SET_USERINFO(data)
      }
      return data
    },
  },
})
