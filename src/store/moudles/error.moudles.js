import { defineStore } from 'pinia'

export const ErrModuleStore = defineStore('ErrModuleStore', {
  state: () => ({
    errorLogs: [],
  }),

  getters: {
    GET_ERROR_LOGS: (state) => state.errorLogs,
  },
  actions: {
    SET_ERROR_LOGS(errorLog) {
      this.errorLogs.push(errorLog)
    },
    CLEAR_ERROR_LOGS() {
      this.errorLogs = []
    },
  },
})
