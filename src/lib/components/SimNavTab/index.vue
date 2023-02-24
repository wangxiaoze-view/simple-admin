<template>
  <div class="sim-tabs">
    <el-tabs v-model="tabActive" type="card" class="sim-tabs--nav">
      <el-tab-pane
        v-for="item in getCheckedRoute"
        :key="item.path"
        :label="item.meta.title"
        :closable="!item.meta.noCloseTab"
        :name="item.path"
      ></el-tab-pane>
    </el-tabs>

    <el-dropdown>
      <el-icon class="sim-dropdown" :size="20"><Menu /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>刷新</el-dropdown-item>
          <el-dropdown-item>关闭其他</el-dropdown-item>
          <el-dropdown-item>关闭左侧</el-dropdown-item>
          <el-dropdown-item>关闭右侧</el-dropdown-item>
          <el-dropdown-item>全部关闭</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
  import { defineComponent, reactive, toRefs, computed, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { RouterMoudleStore } from '@/store/moudles/router.moudles'
  import { handleTabs } from '@/utils/handler.route'
  import { asyncRoutes } from '@/router/route'

  export default defineComponent({
    name: 'SimTab',
    setup() {
      const route = useRoute()

      const { GET_CHECKED_ROUTER, ADD_ROUTER, SET_DEFAULT_ROUTE } =
        RouterMoudleStore()
      const state = reactive({
        tabActive: '',
        getCheckedRoute: computed(() => {
          console.log(GET_CHECKED_ROUTER, 'GET_DEFAULT_ROUTE11')
          return GET_CHECKED_ROUTER
        }),

        addNavTabs: (route) => {
          const tab = handleTabs(route)
          if (tab) {
            ADD_ROUTER(tab)
            state.tabActive = tab.path
          }
        },

        initNocloseRoute: (route) => {
          route.forEach((child) => {
            if (child.meta.noCloseTab) {
              state.addNavTabs(route)
            }
            if (child.children && child.children.length > 0) {
              state.initNocloseRoute(child.children)
            }
          })
        },
      })

      state.initNocloseRoute(asyncRoutes)

      watch(
        () => route.fullPath,
        () => {
          SET_DEFAULT_ROUTE(route)
          state.addNavTabs(route)
        },
        {
          immediate: true,
        }
      )

      return {
        ...toRefs(state),
      }
    },
  })
</script>

<style lang="scss" scoped></style>
