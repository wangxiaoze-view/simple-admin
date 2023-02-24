<template>
  <el-menu
    default-active="2"
    class="sim-menu"
    :mode="mode"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <template v-for="(route, index) in asyncRoutes" :key="index + route.name">
      <el-sub-menu :index="route.path">
        <template #title>
          <el-icon v-if="route.meta.icon" :icon="route.meta.icon">
            <component :is="route.meta.icon" />
          </el-icon>
          <span>{{ translateTitle(route.meta.title) }}</span>
        </template>

        <el-menu-item
          v-for="item in route.children"
          :key="item.meta.fullPath"
          :index="item.meta.fullPath"
        >
          {{ translateTitle(item.meta.title) }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script>
  import { computed, reactive, toRefs } from 'vue'
  import { asyncRoutes } from '@/router/routes'
  import { AppModuleStore } from '@/store/modules/app.module'
  import { translateTitle } from '@/hooks/translate/index'

  export default {
    name: 'SimMenu',
    props: {
      // 是否可以折叠面板
      isCollapse: {
        type: Boolean,
        default: false,
      },
      mode: {
        type: String,
        default: 'vertical',
      },
    },
    setup() {
      const store = AppModuleStore()
      const state = reactive({
        asyncRoutes,
        getTheme: computed(() => store.GET_THEME),
      })

      return {
        translateTitle,
        ...toRefs(state),
      }
    },
  }
</script>

<style scoped lang="scss">
  .sim-menu {
    border: none;
  }
</style>
