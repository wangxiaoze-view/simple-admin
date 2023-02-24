<template>
  <el-row class="sim-tools">
    <el-col :span="6" :offset="0" class="sim-tools--icon">
      <el-icon :size="iconSize" class="cursor-icon" @click="TOGGLE_COLLAPSE">
        <Fold v-if="!getTheme.collapse" />
        <Expand v-else />
      </el-icon>
    </el-col>

    <el-col :span="18" :offset="0" class="sim-tools--handler">
      <el-tooltip effect="dark" content="错误日志" placement="bottom">
        <el-badge is-dot class="cursor-icon">
          <el-icon :size="iconSize"><Bell /></el-icon>
        </el-badge>
      </el-tooltip>

      <el-tooltip effect="dark" content="锁屏" placement="bottom">
        <el-icon :size="iconSize" class="cursor-icon"><Lock /></el-icon>
      </el-tooltip>

      <el-tooltip effect="dark" content="全屏缩放" placement="bottom">
        <el-icon :size="iconSize" class="cursor-icon"><FullScreen /></el-icon>
      </el-tooltip>

      <el-tooltip effect="dark" content="公告" placement="bottom">
        <el-badge value="3" class="cursor-icon">
          <el-icon :size="iconSize">
            <Message />
          </el-icon>
        </el-badge>
      </el-tooltip>

      <el-dropdown type="primary">
        <el-icon color="#fff" :size="iconSize" class="cursor-icon">
          <Operation />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>英文</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-tooltip effect="dark" content="主题设置" placement="bottom">
        <el-icon :size="iconSize" class="cursor-icon"><Setting /></el-icon>
      </el-tooltip>

      <el-tooltip effect="dark" content="刷新" placement="bottom">
        <el-icon :size="iconSize" class="cursor-icon"><Refresh /></el-icon>
      </el-tooltip>

      <el-dropdown type="primary">
        <div class="login-user">
          <el-avatar class="login-user--icon" :src="getUsers.author" />
          {{ getUsers.name }}
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><User /></el-icon>
              个人中心
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><SwitchButton /></el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
  import { defineComponent, reactive, toRefs, computed } from 'vue'
  import { AppMoudleStore } from '@/store/moudles/app.moudles'
  import { UserMoudleStore } from '@/store/moudles/user.moudles'

  export default defineComponent({
    name: 'SimTools',
    setup() {
      const { GET_THEME, TOGGLE_COLLAPSE } = AppMoudleStore()

      const { GET_USERINFO } = UserMoudleStore()

      const iconSize = 20

      const state = reactive({
        getTheme: computed(() => {
          return GET_THEME
        }),

        getUsers: computed(() => {
          return GET_USERINFO
        }),
      })

      console.log(state.getUsers)

      return {
        iconSize,
        TOGGLE_COLLAPSE,
        ...toRefs(state),
      }
    },
  })
</script>

<style lang="scss" scoped></style>
