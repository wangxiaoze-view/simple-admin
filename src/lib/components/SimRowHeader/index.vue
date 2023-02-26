<template>
  <div class="sim-header">
    <el-row>
      <el-col :span="24">
        <el-header class="sim-header--content">
          <el-row class="sim-header--row" align="middle">
            <el-col :xs="4" :sm="3" :md="5" :lg="4" :xl="4">
              <sim-logo :is-collapse="getDevice === 'desktop'" />
            </el-col>
            <el-col :xs="12" :sm="13" :md="12" :lg="12" :xl="12">
              <sim-menu mode="horizontal" />
            </el-col>

            <el-col :xs="8" :sm="8" :md="7" :lg="8" :xl="8">
              <sim-header-tools />
            </el-col>
          </el-row>
        </el-header>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" :offset="0"><sim-tabs /></el-col>
    </el-row>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import SimHeaderTools from '@/lib/components/SimHeaderTools/index.vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import SimMenu from '@/lib/components/SimMenu/index.vue'
  import SimLogo from '@/lib/components/SimLogo/index.vue'
  import SimTabs from '@/lib/components/SimTabs/index.vue'

  export default {
    name: 'SimRowHeader',
    components: {
      SimHeaderTools,
      SimMenu,
      SimLogo,
      SimTabs,
    },
    setup() {
      const store = AppModuleStore()
      const zoomMenu = () => store.TOGGLE_COLLAPSE()
      const getTheme = computed(() => store.GET_THEME)
      const getDevice = computed(() => store.GET_DEVICE)
      return {
        iconSize: 16,
        zoomMenu,
        getTheme,
        getDevice,
      }
    },
  }
</script>

<style scoped lang="scss"></style>
