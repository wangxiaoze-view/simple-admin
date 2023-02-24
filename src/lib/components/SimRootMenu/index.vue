<template>
  <el-scrollbar class="sim-root-bar" :class="{ 'is-collapse': getCollapse }">
    <div class="sim-logo">Logo</div>

    <!--需要重新整理优化 -->
    <el-menu
      :collapse="getCollapse"
      :collapse-transition="false"
      menu-trigger="click"
      :background-color="varCss['menu-background']"
      :text-color="varCss['menu-color']"
      mode="vertical"
      :default-active="getDefaultRoute"
    >
      <template v-for="(route, index) in asyncRoutes" :key="index + route.name">
        <el-sub-menu :index="route.path">
          <template #title>
            <el-icon v-if="route.meta.icon" :icon="route.meta.icon">
              <component :is="route.meta.icon" />
            </el-icon>
            <span>{{ route.meta.title }}</span>
          </template>

          <el-menu-item
            v-for="item in route.children"
            :key="item.meta.fullPath"
            :index="item.meta.fullPath"
            @click="clickMenuItem(item)"
          >
            {{ item.meta.title }}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import { computed, reactive, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  import { AppMoudleStore } from '@/store/moudles/app.moudles'
  import { RouterMoudleStore } from '@/store/moudles/router.moudles'
  import { asyncRoutes } from '@/router/route'
  import varCss from '@/lib/styles/variables/variables.module.scss'

  export default {
    name: 'SimRootMenu',

    setup() {
      const { GET_THEME } = AppMoudleStore()
      const { GET_DEFAULT_ROUTE } = RouterMoudleStore()
      const router = useRouter()

      const state = reactive({
        getCollapse: computed(() => {
          return GET_THEME.collapse
        }),

        getDefaultRoute: computed(() => {
          return GET_DEFAULT_ROUTE
        }),

        clickMenuItem: (route) => {
          router.push(route.meta.fullPath)
        },
      })

      return {
        varCss,
        ...toRefs(state),
        asyncRoutes,
      }
    },
  }
</script>

<style scoped lang="scss"></style>
