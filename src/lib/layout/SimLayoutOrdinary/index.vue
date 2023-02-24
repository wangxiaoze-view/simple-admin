<template>
  <div
    class="sim-layout-ordinary"
    :class="{
      'is-fixed': isHeaderFixed,
      'is-tabs': isTabs,
      'is-collapse': collapse,
      'is-mobile': device === 'mobile',
    }"
  >
    <sim-aside v-if="device !== 'mobile'" :is-collapse="collapse" />
    <sim-drawer-menu v-if="device === 'mobile'" />
    <div class="sim-content">
      <sim-header />
    </div>
  </div>
</template>

<script>
  import SimAside from '@/lib/components/SimAside/index.vue'
  import SimDrawerMenu from '@/lib/components/SimDrawerMenu/index.vue'
  import SimHeader from '@/lib/components/SimHeader/index.vue'

  export default {
    name: 'SimLayoutOrdinary',
    components: {
      SimAside,
      SimDrawerMenu,
      SimHeader,
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

<style scoped lang="scss">
  .sim-layout-ordinary {
    height: 100%;

    &.is-mobile {
      .sim-content {
        margin-left: 0 !important;
        .sim-header {
          width: 100%;
        }
      }
    }

    &:not(.is-mobile).is-collapse {
      .el-aside {
        width: auto;
      }
      .sim-content {
        margin-left: 60px;
        .sim-header {
          width: calc(100% - 60px);
        }
      }
    }

    .sim-content {
      min-height: 100%;
      margin-left: 220px;
      position: relative;
      background-color: #f0f2f5;
    }
  }
</style>
