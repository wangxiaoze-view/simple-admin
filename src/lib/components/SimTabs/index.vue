<template>
  <div class="sim-tabs--container">
    <el-tabs
      v-model="activeName"
      class="sim-tabs"
      type="card"
      @tab-change="tabChange"
      @tab-remove="tabRemove"
    >
      <el-tab-pane
        v-for="(item, index) in getCheckedRoute"
        :key="item.path"
        :label="translateTitle(item.meta.title)"
        :name="item.path"
        :closable="index !== 0"
      >
        <template #label>
          <SimIcon
            v-if="item.meta.icon"
            :icon="item.meta.icon"
            class="sim-icon"
          />
          <span>{{ translateTitle(item.meta.title) }}</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { toRefs, reactive, computed, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { RouterModuleStore } from '@/store/modules/router.modules'
  import { translateTitle } from '@/hooks/translate/index'

  export default {
    name: 'SimTabs',
    setup() {
      const route = useRoute()
      const router = useRouter()
      const routerStore = RouterModuleStore()
      const state = reactive({
        activeName: '/home/workbench',
        getCheckedRoute: computed(() => routerStore.GET_CHECKED_ROUTER),

        tabChange: (name) => {
          router.push(name)
        },

        tabRemove: (name) => {
          const filter = (item) => item.path === name
          const getRoute = state.getCheckedRoute.find(filter)

          if (getRoute) {
            router.removeRoute(getRoute.name)
            routerStore.REMOVE_CHECKED_ROUTER(
              state.getCheckedRoute.findIndex(filter)
            )

            if (name === state.activeName) {
              state.activeName =
                routerStore.GET_CHECKED_ROUTER[
                  routerStore.GET_CHECKED_ROUTER.length - 1
                ].path
            }
          }
        },
      })

      watch(
        () => route.path,
        (val) => {
          state.activeName = val
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
  .sim-tabs--container {
    :deep(.sim-tabs) {
      // padding: 0 20px;
      background: #fff;
      box-shadow: 4px 2px 6px #ddd;
      .el-tabs__header {
        margin-bottom: 0;
        border: none;

        .el-tabs__nav {
          border: none;

          .el-tabs__item {
            border: none;

            &:hover,
            &.is-active {
              background-color: var(--el-color-primary-light-9);
            }
          }
        }
      }
    }

    .sim-tabs--icon {
      margin-right: 4px;
    }

    .el-sim--icon {
      vertical-align: middle;
      margin-right: 4px;
    }
  }
</style>
