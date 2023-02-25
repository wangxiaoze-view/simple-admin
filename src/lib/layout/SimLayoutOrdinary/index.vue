<template>
  <div
    class="sim-layout-ordinary"
    :class="{
      'is-fixed-header': isHeaderFixed,
      'is-tabs': isTabs,
      'is-collapse': collapse,
      'is-mobile': device === 'mobile',
    }"
  >
    <sim-aside v-if="device !== 'mobile'" :is-collapse="collapse" />
    <sim-drawer-menu v-if="device === 'mobile'" />
    <div class="sim-content">
      <sim-header />
      <sim-main-view
        class="sim-view--container"
        :style="{ padding: isHeaderFixed ? '121px 20px 20px 20px' : '' }"
      />
    </div>
  </div>
</template>

<script>
  import SimAside from '@/lib/components/SimAside/index.vue'
  import SimDrawerMenu from '@/lib/components/SimDrawerMenu/index.vue'
  import SimHeader from '@/lib/components/SimHeader/index.vue'
  import SimMainView from '@/lib/components/SimMainView/index.vue'

  export default {
    name: 'SimLayoutOrdinary',
    components: {
      SimAside,
      SimDrawerMenu,
      SimHeader,
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
