<template>
  <el-scrollbar class="sim-scroll--bar">
    <sim-app />
  </el-scrollbar>
</template>

<script setup>
  import SimApp from '@/lib/components/SimApp/index.vue'
</script>

<style scoped lang="scss">
  .sim-scroll--bar {
    :deep(.el-scrollbar__view) {
      height: 100%;
    }
  }
</style>
