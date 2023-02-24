<template>
  <el-drawer
    v-model="getTheme.collapse"
    :size="220"
    :with-header="false"
    direction="ltr"
    @close="setCollapse"
  >
    <sim-menu :is-collapse="false" />
  </el-drawer>
</template>

<script>
  import { defineComponent, reactive, computed, toRefs } from 'vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import SimMenu from '@/lib/components/SimMenu/index.vue'

  export default defineComponent({
    name: 'SimDrawerMenu',
    components: {
      SimMenu,
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
