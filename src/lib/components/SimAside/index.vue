<template>
  <el-aside class="sim-aside">
    <div class="sim-aside--title">S</div>
    <div class="sim-aside--menu">
      <el-scrollbar class="scroll-bar">
        <sim-menu :is-collapse="isCollapse" />
      </el-scrollbar>
    </div>
  </el-aside>
</template>

<script>
  import { computed, reactive, toRefs } from 'vue'
  import SimMenu from '@/lib/components/SimMenu/index.vue'
  import { AppModuleStore } from '@/store/modules/app.module'

  export default {
    name: 'SimAside',
    components: {
      SimMenu,
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

<style scoped lang="scss">
  .sim-aside {
    //-webkit-transition: width 0.2s;
    //transition: width 0.2s;
    width: 220px;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    //z-index: 1001;
    overflow: hidden;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
      color 0.1s, font-size 0s;
    &--title {
      min-height: 60px;
      line-height: 60px;
      text-align: center;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: rgb(25, 26, 35);
      font-weight: 600;
    }

    &--menu {
      .scroll-bar {
        height: calc(100vh - 60px);
      }
    }
  }
</style>
