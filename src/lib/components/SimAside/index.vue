<template>
  <el-aside class="sim-aside">
    <sim-logo :is-collapse="!isCollapse" />
    <div class="sim-aside--menu">
      <el-scrollbar class="sim-scroll--bar">
        <sim-menu :is-collapse="isCollapse" />
      </el-scrollbar>
    </div>
  </el-aside>
</template>

<script>
  import { computed, reactive, toRefs } from 'vue'
  import SimMenu from '@/lib/components/SimMenu/index.vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import SimLogo from '@/lib/components/SimLogo/index.vue'

  export default {
    name: 'SimAside',
    components: {
      SimMenu,
      SimLogo,
    },
    props: {
      isCollapse: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      const store = AppModuleStore()

      const state = reactive({
        // 获取设备
        getDevice: computed(() => store.GET_DEVICE),
        // 获取主题
        getTheme: computed(() => store.GET_THEME),
        // 获取结构
        getLayout: computed(() => `sim-layout-${store.GET_THEME.layout}`),
      })
      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style scoped lang="scss"></style>
