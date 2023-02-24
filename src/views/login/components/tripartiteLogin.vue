<template>
  <img
    v-for="(item, index) in SVG_ICONS"
    :key="index"
    class="login-image"
    :src="item"
    alt=""
    @click="toLogin"
  />
</template>

<script>
  import { SVG_ICONS } from '@/views/login/config'
  import { simNotice } from '@/utils/ele'

  export default {
    name: 'TripartiteLogin',
    setup() {
      const toLogin = () => {
        simNotice({
          title: '温馨提示',
          message: '该功能仅仅为演示，请以实际业务场景使用',
          type: 'error',
        })
      }
      return {
        SVG_ICONS,
        toLogin,
      }
    },
  }
</script>

<style scoped></style>
