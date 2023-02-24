<template>
  <el-config-provider
    :locale="config.locale"
    :size="config.size"
    :z-index="config.zIndex"
    :button="config.button"
    :message="config.message"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<script>
  import { defineComponent } from 'vue'
  import providerConfig from '@/hooks/provider/index'

  export default defineComponent({
    name: 'SimAppIndex',
    setup() {
      return {
        config: providerConfig(),
      }
    },
  })
</script>

<style scoped></style>
