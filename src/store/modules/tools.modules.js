import { defineStore } from 'pinia'

export const ToolsModuleStore = defineStore('ToolsModuleStore', {
  state: () => ({
    lockImage: '',
  }),

  getters: {
    GET_LOCK_IMAGE: (state) => state.lockImage,
  },
  actions: {
    SET_LOCK_IMAGE(image) {
      this.lockImage = image
    },
    CLEAR_ERROR_LOGS() {
      this.$reset()
    },
  },
})
