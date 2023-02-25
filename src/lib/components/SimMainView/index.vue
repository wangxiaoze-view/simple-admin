<template>
  <div class="sim-router--view">
    <router-view />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'SimMainView',
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped></style>
