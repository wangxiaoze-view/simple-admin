import { defineStore } from 'pinia'

export const ErrorModuleStore = defineStore('ErrorModuleStore', {
  state: () => ({
    errorLogs: [],
  }),

  getters: {
    GET_ERROR_LOGS: (state) => state.errorLogs,
  },
  actions: {
    SET_ERROR_LOG(errorLog) {
      const hasIndex = this.errorLogs.findIndex(
        (err) => err.error.message === errorLog.error.message
      )
      if (hasIndex === -1) {
        this.errorLogs.push(errorLog)
      }
    },
    CLEAR_ERROR_LOGS() {
      this.$reset()
    },
  },
})
