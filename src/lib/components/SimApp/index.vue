<template>
  <el-config-provider
    :locale="locale"
    :size="size"
    :z-index="zIndex"
    :button="button"
    :message="message"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<script>
  import getProvider from '@/hooks/provider'

  export default {
    name: 'SimApp',
    setup() {
      return {
        ...getProvider(),
      }
    },
  }
</script>
