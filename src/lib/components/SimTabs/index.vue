<template>
  <div class="sim-tabs">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { toRefs, reactive } from 'vue'

  export default {
    name: 'SimTabs',
    setup() {
      const state = reactive({
        activeName: 'first',
      })

      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style scoped lang="scss">
  .sim-tabs {
    padding: 0 20px;
    background: #fff;
  }
</style>
