<template>
  <div class="sim-router--view">
    <router-view />

    <sim-footer />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import SimFooter from '@/lib/components/SimFooter'

  export default defineComponent({
    name: 'SimMainView',
    components: {
      SimFooter,
    },
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped></style>
