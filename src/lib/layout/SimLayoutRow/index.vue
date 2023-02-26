<template>
  <div
    class="sim-layout-row"
    :class="{
      'is-fixed-header': isHeaderFixed,
      'is-tabs': isTabs,
      'is-collapse': collapse,
      'is-mobile': device === 'mobile',
    }"
  >
    <sim-drawer-menu v-if="device === 'mobile'" />
    <div class="sim-content">
      <sim-row-header />
      <sim-main-view class="sim-view--container" />
    </div>
  </div>
</template>

<script>
  import SimDrawerMenu from '@/lib/components/SimDrawerMenu/index.vue'
  import SimRowHeader from '@/lib/components/SimRowHeader/index.vue'
  import SimMainView from '@/lib/components/SimMainView/index.vue'

  export default {
    name: 'SimLayoutRow',
    components: {
      SimDrawerMenu,
      SimRowHeader,
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
  }
</script>

<style scoped lang="scss"></style>
