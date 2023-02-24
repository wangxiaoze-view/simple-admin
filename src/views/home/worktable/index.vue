<template>
  <div class="worktable-main--container">
    <div v-for="item in 100" :key="item" class="test">{{ item }}</div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: '',
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  .test {
    height: 100px;
    background-color: cadetblue;
    color: #fff;
    margin-bottom: 20px;
  }
</style>
