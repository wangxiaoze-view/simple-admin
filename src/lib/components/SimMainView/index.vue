<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive :include="keepAliveNameList" :max="keepAliveMaxNum">
        <component :is="Component" :key="routerKey" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
  import { defineComponent, reactive, toRefs, watchEffect, computed } from 'vue'

  import { useRoute } from 'vue-router'
  import { RouterMoudleStore } from '@/store/moudles/router.moudles'

  export default defineComponent({
    name: 'SimMainView',
    setup() {
      const route = useRoute()

      const { GET_CHECKED_ROUTER } = RouterMoudleStore()
      const state = reactive({
        routerKey: '',
        keepAliveNameList: [],
        keepAliveMaxNum: 10,

        getRoutes: computed(() => {
          return GET_CHECKED_ROUTER
        }),

        updateKeepAliveNameList: (refreshRouteName) => {
          state.keepAliveNameList = state.getRoutes
            .filter((item) => {
              return !item.meta.noKeepAlive && item.name !== refreshRouteName
            })
            .flatMap((item) => item.name)
        },
      })

      watchEffect(() => {
        state.routerKey = route.fullPath
        state.updateKeepAliveNameList()
      })
      return {
        ...toRefs(state),
      }
    },
  })
</script>

<style lang="scss" scoped></style>
