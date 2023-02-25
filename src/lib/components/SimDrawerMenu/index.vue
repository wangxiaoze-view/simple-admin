<template>
  <el-drawer
    v-model="getTheme.collapse"
    :size="220"
    :with-header="false"
    direction="ltr"
    @close="setCollapse"
  >
    <sim-aside :is-collapse="false" class="sim-aside--drawer" />
  </el-drawer>
</template>

<script>
  import { defineComponent, reactive, computed, toRefs } from 'vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import SimAside from '@/lib/components/SimAside/index.vue'

  export default defineComponent({
    name: 'SimDrawerMenu',
    components: {
      SimAside,
    },
    setup() {
      const store = AppModuleStore()

      const state = reactive({
        // 获取主题
        getTheme: computed(() => store.GET_THEME),
        // 折叠面板
        setCollapse: () => store.TOGGLE_COLLAPSE(),
      })
      return {
        ...toRefs(state),
      }
    },
  })
</script>

<style scoped></style>
