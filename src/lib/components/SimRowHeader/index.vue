<template>
  <div class="sim-header">
    <el-row>
      <el-col :span="24">
        <el-header class="sim-header--content">
          <el-row class="sim-header--row" align="middle">
            <el-col :xs="12" :sm="10" :md="15" :lg="15" :xl="15">
              <sim-menu mode="horizontal" />
            </el-col>

            <el-col :xs="12" :sm="14" :md="9" :lg="9" :xl="9">
              <sim-header-tools />
            </el-col>
          </el-row>
        </el-header>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import SimHeaderTools from '@/lib/components/SimHeaderTools/index.vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import SimMenu from '@/lib/components/SimMenu/index.vue'

  export default {
    name: 'SimRowHeader',
    components: {
      SimHeaderTools,
      SimMenu,
    },
    setup() {
      const store = AppModuleStore()
      const zoomMenu = () => store.TOGGLE_COLLAPSE()
      const getTheme = computed(() => store.GET_THEME)
      return {
        iconSize: 16,
        zoomMenu,
        getTheme,
      }
    },
  }
</script>

<style scoped lang="scss">
  .sim-header {
    //z-index: 1;

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
