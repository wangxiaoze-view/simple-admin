<template>
  <div
    class="sim-layout-ordinary"
    :class="{
      fixed: isHeaderFixed,
      'hide-tabs': !isTabs,
      'is-collapse': collapse,
    }"
  >
    <SimRootMenu />

    <div class="sim-layout-container">
      <div class="sim-layout-header">
        <SimTools />
        <SimNavTab />
      </div>

      <div class="sim-router--view">
        <SimMainView />
      </div>
    </div>
  </div>
</template>

<script>
  import SimRootMenu from '../../components/SimRootMenu/index.vue'
  import SimTools from '../../components/SimTools/index.vue'
  import SimNavTab from '../../components/SimNavTab/index.vue'
  import SimMainView from '../../components/SimMainView/index.vue'

  export default {
    name: 'SimLayoutOrdinary',
    components: {
      SimRootMenu,
      SimTools,
      SimNavTab,
      SimMainView,
    },
    props: {
      device: {
        type: String,
        default: 'desktop',
      },
      isHeaderFixed: {
        type: Boolean,
        default: true,
      },
      isTabs: {
        type: Boolean,
        default: true,
      },
      collapse: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      return {}
    },
  }
</script>

<style scoped lang="scss"></style>
