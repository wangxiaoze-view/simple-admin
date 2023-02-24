import { defineStore } from 'pinia'

export const NoticeModuleStore = defineStore('NoticeModuleStore', {
  state: () => ({
    noticeList: [],
  }),

  getters: {
    GET_NOTICE_LIST: (state) => state.noticeList,
  },
  actions: {
    SET_NOTICE_LIST(list) {
      this.noticeList = list
    },
    CLEAR_ERROR_LOGS() {
      this.$reset()
    },
  },
})
