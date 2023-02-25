<template>
  <el-scrollbar class="sim-scroll--bar" wrap-class="sim-scroll--wrap">
    <sim-app />

    <el-backtop
      target=".sim-scroll--wrap"
      :right="20"
      :bottom="100"
      :visibility-height="200"
    ></el-backtop>
  </el-scrollbar>
</template>

<script setup>
  import SimApp from '@/lib/components/SimApp/index.vue'
</script>

<style scoped lang="scss">
  .sim-scroll--bar {
    height: 100%;
    :deep(.el-scrollbar__view) {
      height: 100%;
    }
  }
</style>
