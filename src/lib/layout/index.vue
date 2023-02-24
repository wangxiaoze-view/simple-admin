<template>
  <div class="sim-admin--container">
    <!--	用于加载layout的组件结构	-->

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
  import { defineComponent, reactive, computed, toRefs, onMounted } from 'vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import { NoticeModuleStore } from '@/store/modules/notice.modules'
  import { ToolsModuleStore } from '@/store/modules/tools.modules'
  import SimLayoutOrdinary from '@/lib/layout/SimLayoutOrdinary/index.vue'
  import SimLayoutFloat from '@/lib/layout/SimLayoutFloat/index.vue'
  import SimLayoutRow from '@/lib/layout/SimLayoutRow/index.vue'
  import useResponsive from '@/hooks/resize'
  import Notice from '@/api/notice'
  import Tools from '@/api/tools'

  export default defineComponent({
    name: 'LayoutIndex',
    components: {
      SimLayoutOrdinary,
      SimLayoutFloat,
      SimLayoutRow,
    },
    setup() {
      const store = AppModuleStore()
      const noticeStore = NoticeModuleStore()
      const toolsStore = ToolsModuleStore()

      const state = reactive({
        // 获取设备
        getDevice: computed(() => store.GET_DEVICE),
        // 获取主题
        getTheme: computed(() => store.GET_THEME),
        // 获取结构
        getLayout: computed(() => `sim-layout-${store.GET_THEME.layout}`),
        // 设置消息
        getNoticeList: async () => {
          const { data } = await Notice.getList()
          noticeStore.SET_NOTICE_LIST(data.list)
        },
        // 	获取锁屏壁纸
        getLockPicture: async () => {
          const { data } = await Tools.getDmImage({ format: 'image' })
          toolsStore.SET_LOCK_IMAGE(data.url)
        },
      })

      onMounted(() => {
        store.UPDATE_THEME()
        state.getNoticeList()
        state.getLockPicture()
      })

      useResponsive()
      return {
        ...toRefs(state),
      }
    },
  })
</script>

<style scoped lang="scss">
  .sim-admin--container {
    height: 100%;
    .sim-admin-container {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
</style>
