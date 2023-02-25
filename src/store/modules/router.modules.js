import { defineStore } from 'pinia'
import { getLocalStorage } from '@/utils/cookie/index'

const { sim_tabs } = require('@/config/index')

const { checkedRoute = [] } = getLocalStorage(sim_tabs)

export const RouterModuleStore = defineStore('RouterModuleStore', {
  state: () => ({
    checkedRoute: checkedRoute || [],
  }),

  getters: {
    GET_CHECKED_ROUTER: (state) => state.checkedRoute,
  },
  actions: {
    SET_CHECKED_ROUTER(route) {
      const hasIndex = this.checkedRoute.findIndex(
        (item) => item.path === route.path
      )
      if (hasIndex === -1) {
        this.checkedRoute.push(route)
        localStorage.setItem(
          sim_tabs,
          JSON.stringify({ checkedRoute: this.checkedRoute })
        )
      }
    },

    REMOVE_CHECKED_ROUTER(index) {
      if (index !== -1) {
        this.checkedRoute.splice(index, 1)
        localStorage.setItem(
          sim_tabs,
          JSON.stringify({ checkedRoute: this.checkedRoute })
        )
      }
    },

    CLEAR_ERROR_LOGS() {
      this.$reset()
    },
  },
})
