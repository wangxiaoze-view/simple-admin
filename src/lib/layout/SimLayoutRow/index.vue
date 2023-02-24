<template>
  <div
    class="sim-layout-row"
    :class="{
      'is-fixed': isHeaderFixed,
      'is-tabs': isTabs,
      'is-collapse': collapse,
      'is-mobile': device === 'mobile',
    }"
  >
    <sim-drawer-menu v-if="device === 'mobile'" />
    <div class="sim-content">
      <sim-row-header />
    </div>
  </div>
</template>

<script>
  import SimDrawerMenu from '@/lib/components/SimDrawerMenu/index.vue'
  import SimRowHeader from '@/lib/components/SimRowHeader/index.vue'

  export default {
    name: 'SimLayoutRow',
    components: {
      SimDrawerMenu,
      SimRowHeader,
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
  .sim-layout-row {
    height: 100%;

    :deep(.sim-aside) {
      width: 0px;
    }

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
      margin-left: 0;
      position: relative;
      background-color: #f0f2f5;
      :deep(.sim-header) {
        width: 100%;
      }
    }
  }
</style>
