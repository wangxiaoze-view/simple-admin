<template>
  <div class="work-main--container">
    <sim-welcome />
    <sim-entrance />
    <sim-package />
    <sim-update />
  </div>
</template>

<script>
  import SimWelcome from './components/welcome'
  import SimEntrance from './components/entrance'
  import SimPackage from './components/package'
  import SimUpdate from './components/update'

  export default {
    name: 'Workbench',
    components: {
      SimWelcome,
      SimEntrance,
      SimPackage,
      SimUpdate,
    },
  }
</script>

<style scoped></style>
