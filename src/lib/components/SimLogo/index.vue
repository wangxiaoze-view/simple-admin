<template>
  <div class="sim-aside--title">
    <img class="sim-logo" :src="require('@/assets/images/logo.png')" alt="" />
    <span v-if="isCollapse" class="sim-logo-title">SimpleAdmin</span>
  </div>
</template>

<script>
  export default {
    name: 'SimLogo',
    props: {
      isCollapse: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      return {}
    },
  }
</script>

<style lang="scss" scoped></style>
