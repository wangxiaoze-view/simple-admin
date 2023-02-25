<template>
  <transition>
    <div
      class="error-container"
      :class="[isAbsolute ? 'position-adsolute' : '']"
    >
      <el-icon :size="14"><WarnTriangleFilled /></el-icon>
      <span class="error-container--title">{{ title }}</span>
    </div>
  </transition>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'SimFormErrorMsg',
    props: {
      title: {
        type: String,
        default: '🙅错误信息',
      },
      isAbsolute: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 0.8s ease;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .error-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #ff6463;
    font-weight: 500;
    line-height: 18px;
    font-size: 12px;

    &.position-adsolute {
      position: absolute;
      top: 100%;
    }

    &--title {
      padding-left: 4px;
    }
  }
</style>
