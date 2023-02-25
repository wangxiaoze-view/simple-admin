<template>
  <div class="sim-header">
    <el-row class="sim-header--container">
      <el-col :span="24">
        <el-header class="sim-header--content">
          <el-row class="sim-header--row" align="middle">
            <el-col
              v-if="
                getTheme.layout === 'ordinary' ||
                (getDevice === 'mobile' && getTheme.layout === 'float')
              "
              :xs="2"
              :sm="1"
              :md="1"
              :lg="1"
              :xl="1"
            >
              <div class="sim-menu--icon" @click="zoomMenu">
                <el-icon :size="16"><DArrowLeft /></el-icon>
              </div>
            </el-col>
            <el-col :xs="10" :sm="9" :md="14" :lg="14" :xl="14">
              <el-breadcrumb
                v-if="getTheme.breadcrumb"
                separator="/"
                class="hidden-xs-only"
              >
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :xs="12" :sm="14" :md="9" :lg="9" :xl="9">
              <sim-header-tools />
            </el-col>
          </el-row>
        </el-header>
      </el-col>
    </el-row>
    <sim-tabs />
  </div>
</template>

<script>
  import { computed } from 'vue'
  import SimHeaderTools from '@/lib/components/SimHeaderTools/index.vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import SimTabs from '@/lib/components/SimTabs/index.vue'

  export default {
    name: 'SimHeader',
    components: {
      SimHeaderTools,
      SimTabs,
    },
    setup() {
      const store = AppModuleStore()
      const zoomMenu = () => store.TOGGLE_COLLAPSE()
      const getDevice = computed(() => store.GET_DEVICE)
      const getTheme = computed(() => store.GET_THEME)
      return {
        iconSize: 16,
        zoomMenu,
        getDevice,
        getTheme,
      }
    },
  }
</script>

<style scoped lang="scss">
  .sim-header {
    //z-index: 1;

    &--container {
      border-bottom: 1px solid #eee;
    }

    &--content {
      background-color: #fff;
      padding: 0 16px;
      height: 60px;
      .sim-header--row {
        height: 100%;
      }
    }

    .sim-menu--icon {
      cursor: pointer;
      font-size: 24px;
      color: #000;
      //margin-top: 16px;
      //width: 30px;
      //height: 100%;
      //line-height: 30px;
      //float: left;
    }
  }
</style>
