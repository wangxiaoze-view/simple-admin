<template>
  <div class="sim-admin-container">
    <!-- layout 的动态组件 -->
    <component
      :is="getLayout"
      :device="getDevice"
      :is-header-fixed="getTheme.isHeaderFixed"
      :is-tabs="getTheme.isTabs"
      :collapse="getTheme.collapse"
    />

    <el-backtop
      target="#app"
      :right="10"
      :bottom="100"
      :visibility-height="200"
    ></el-backtop>
  </div>
</template>

<script>
  import { computed, reactive, toRefs } from 'vue'
  import { AppMoudleStore } from '@/store/moudles/app.moudles'
  import SimLayoutOrdinary from './SimLayoutOrdinary/index.vue'

  export default {
    name: 'Index',
    components: {
      SimLayoutOrdinary,
    },
    setup() {
      const appStore = AppMoudleStore()

      const state = reactive({
        getDevice: computed(() => {
          return appStore.GET_DEVICE
        }),

        getTheme: computed(() => {
          return appStore.GET_THEME
        }),

        getLayout: computed(() => {
          return `sim-layout-${appStore.GET_THEME.layout}`
        }),
      })

      appStore.UPDATE_THEME()

      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style scoped lang="scss">
  .sim-admin-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
