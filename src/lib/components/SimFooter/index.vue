<template>
  <footer v-if="getTheme.isFooter" class="sim-footer--container">
    Copyright 2023 &nbsp;©&nbsp; 王小泽
  </footer>
</template>

<script>
  import { computed } from 'vue'
  import { AppModuleStore } from '@/store/modules/app.modules'

  export default {
    name: 'SimFooter',
    setup() {
      const appStore = AppModuleStore()

      const getTheme = computed(() => appStore.GET_THEME)
      return {
        getTheme,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sim-footer--container {
    font-size: 14px;
    text-align: center;
  }
</style>
