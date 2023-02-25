<template>
  <el-menu
    :default-active="activeIndex"
    class="sim-menu"
    :mode="mode"
    :collapse="isCollapse"
    :collapse-transition="false"
    :router="true"
  >
    <template v-for="(route, index) in asyncRoutes" :key="index">
      <el-sub-menu :index="route.path">
        <template #title>
          <el-icon v-if="route.meta.icon" :icon="route.meta.icon">
            <component :is="route.meta.icon" />
          </el-icon>
          <span>{{ translateTitle(route.meta.title) }}</span>
        </template>

        <el-menu-item
          v-for="item in route.children"
          :key="route.path + '/' + item.path"
          :index="route.path + '/' + item.path"
        >
          <el-icon v-if="item.meta.icon" :icon="item.meta.icon">
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ translateTitle(item.meta.title) }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script>
  import { computed, reactive, toRefs, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { asyncRoutes } from '@/router/routes'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import { translateTitle } from '@/hooks/translate/index'
  import { RouterModuleStore } from '@/store/modules/router.modules'

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
      const route = useRoute()
      const store = AppModuleStore()
      const routerStore = RouterModuleStore()

      const state = reactive({
        activeIndex: '/home/index',
        asyncRoutes,
        getTheme: computed(() => store.GET_THEME),
      })

      watch(
        () => route.path,
        (val) => {
          state.activeIndex = val

          const getRoute = route.matched.find((item) => item.path === val)
          if (getRoute) {
            routerStore.SET_CHECKED_ROUTER(getRoute)
          }
        },
        {
          deep: true,
          immediate: true,
        }
      )

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
