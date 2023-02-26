<template>
  <div className="analyse-main-s-container">
    <sim-bench-card />
  </div>
</template>

<script>
  import SimBenchCard from './components/benchCard.vue'

  export default {
    name: 'Analyse',
    components: {
      SimBenchCard,
    },
  }
</script>

<style scoped></style>
