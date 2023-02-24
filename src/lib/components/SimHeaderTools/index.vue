<template>
  <div class="sim-tools">
    <el-tooltip
      effect="dark"
      :content="translateTitle('debug')"
      placement="bottom"
    >
      <el-badge
        v-show="getDevice !== 'mobile' && getTheme.debug"
        class="cursor-icon"
        style="margin-bottom: -6px"
        :is-dot="getError.length > 0"
        @click="showError"
      >
        <el-icon :size="iconSize"><Bell /></el-icon>
      </el-badge>
    </el-tooltip>

    <el-tooltip
      effect="dark"
      :content="translateTitle('locked')"
      placement="bottom"
    >
      <el-icon
        v-show="getDevice !== 'mobile' && getTheme.isLock"
        class="cursor-icon"
        :size="iconSize"
        @click="setLock"
      >
        <Lock />
      </el-icon>
    </el-tooltip>

    <el-tooltip
      effect="dark"
      :content="translateTitle('fullPage')"
      placement="bottom"
    >
      <el-icon
        v-show="getDevice !== 'mobile' && getTheme.fullPage"
        class="cursor-icon"
        :size="iconSize"
        @click="fullPage"
      >
        <FullScreen />
      </el-icon>
    </el-tooltip>

    <el-dropdown>
      <el-badge
        v-show="getTheme.isNotice"
        class="cursor-icon"
        :value="getNoticeList.length > 0 ? getNoticeList.length : ''"
      >
        <el-icon :size="iconSize">
          <Message />
        </el-icon>
      </el-badge>

      <template #dropdown>
        <el-scrollbar max-height="500">
          <div class="sim-notice">
            <div
              v-for="(item, index) in getNoticeList"
              :key="index"
              class="sim-notice--item"
            >
              <el-avatar class="sim-notice--icon" :src="item.author" />
              <div class="sim-notice--content">
                <div class="title">
                  <div>{{ item.title }}</div>
                  <div>{{ item.createTime }}</div>
                </div>
                <div class="sub-title">{{ item.desc }}</div>
              </div>
            </div>
            <div style="text-align: center">
              <el-button type="primary" size="small" icon="More">
                查看更多
              </el-button>
            </div>
          </div>
        </el-scrollbar>
      </template>
    </el-dropdown>

    <el-dropdown @command="changeLan">
      <el-icon v-show="getTheme.i18n" class="cursor-icon" :size="iconSize">
        <Operation />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zh">简体中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-tooltip
      effect="dark"
      :content="translateTitle('themeTitle')"
      placement="bottom"
    >
      <el-icon
        v-show="getDevice !== 'mobile'"
        class="cursor-icon"
        :size="iconSize"
        @click="showTheme"
      >
        <Setting />
      </el-icon>
    </el-tooltip>

    <el-tooltip
      effec="dark"
      :content="translateTitle('refresh')"
      placement="bottom"
    >
      <el-icon v-show="getTheme.refresh" class="cursor-icon" :size="iconSize">
        <Refresh />
      </el-icon>
    </el-tooltip>

    <el-dropdown>
      <div class="login-user">
        <el-avatar class="login-user--icon" :src="getUserInfo.author" />
        {{ getUserInfo.name }}
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

    <template v-if="getDevice !== 'mobile'">
      <dialog-el ref="errorRef">
        <el-table :data="getError" border style="width: 100%">
          <el-table-column type="index" width="50" align="center" />
          <el-table-column prop="url" label="地址" width="280" />
          <el-table-column prop="error" label="错误日志" />
          <el-table-column prop="info" label="错误信息" width="200" />
          <el-table-column label="查询" width="240">
            <template #default="scope">
              <el-button
                type="primary"
                @click="searchError('baidu', scope.row.error)"
              >
                百度
              </el-button>
              <el-button
                type="success"
                @click="searchError('google', scope.row.error)"
              >
                谷歌
              </el-button>
              <el-button
                type="warning"
                @click="searchError('bing', scope.row.error)"
              >
                bing
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </dialog-el>
    </template>

    <template v-if="getIsLock">
      <sim-lock />
    </template>

    <sim-theme-drawer ref="themeRef" />
  </div>
</template>

<script>
  import { toRefs, reactive, computed, ref } from 'vue'
  import { useFullscreen } from '@vueuse/core'
  import { UserModuleStore } from '@/store/modules/user.modules'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import { ErrorModuleStore } from '@/store/modules/error.modules'
  import { NoticeModuleStore } from '@/store/modules/notice.modules'
  import DialogEl from '@/components/DialogEl/index.vue'
  import SimLock from '@/lib/components/SimLock/index.vue'
  import SimThemeDrawer from '@/lib/components/SimThemeDrawer/index.vue'
  import { simMessage } from '@/utils/ele'
  import { translateTitle } from '@/hooks/translate'

  export default {
    name: 'SimHeaderTools',
    components: {
      DialogEl,
      SimLock,
      SimThemeDrawer,
    },
    setup() {
      const errorRef = ref()
      const themeRef = ref()
      const userStore = UserModuleStore()
      const appStore = AppModuleStore()
      const errorStore = ErrorModuleStore()
      const noticeStore = NoticeModuleStore()

      const { isFullscreen, toggle } = useFullscreen()

      const state = reactive({
        iconSize: 18,
        getUserInfo: computed(() => userStore.GET_USER_INFO),
        getDevice: computed(() => appStore.GET_DEVICE),
        getTheme: computed(() => appStore.GET_THEME),
        getError: computed(() => errorStore.GET_ERROR_LOGS),
        getNoticeList: computed(() => noticeStore.GET_NOTICE_LIST),
        getIsLock: computed(() => appStore.GET_IS_LOCK),
      })

      const handlerState = reactive({
        showError: () => {
          errorRef.value?.setVisible(true, {
            title: '错误日志',
            width: '80%',
            highlightCurrentRow: true,
          })
        },

        searchError: (type, error) => {
          switch (type) {
            case 'baidu':
              window.open(`https://www.baidu.com/s?wd=${error}`)
              break
            case 'google':
              window.open(`https://www.google.com/search?q=${error}`)
              break
            case 'bing':
              window.open(`https://cn.bing.com/search?q=${error}`)
              break
            default:
              break
          }
        },

        fullPage: () => toggle(),

        changeLan: (command) => {
          simMessage({
            grouping: true,
            message: '切换成功~',
            type: 'success',
          })
          appStore.SET_LANGUAGE(command)
        },

        setLock: () => appStore.SET_IS_LOCK(true),

        showTheme: () => {
          themeRef.value?.setVisible(true, {
            size: '300px',
            title: translateTitle('themeTitle'),
          })
        },
      })

      return {
        errorRef,
        themeRef,
        isFullscreen,
        translateTitle,
        ...toRefs(state),
        ...toRefs(handlerState),
      }
    },
  }
</script>

<style scoped lang="scss">
  .sim-tools {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cursor-icon {
      display: flex;
      cursor: pointer;
      margin-right: 20px;
      outline: none;
    }

    .login-user {
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      .login-user--icon {
        margin-right: 16px;
      }
    }
  }
</style>

<style lang="scss">
  .sim-notice {
    padding: 14px;
    width: 300px;

    &--item {
      display: flex;
      align-items: flex-start;
      &:not(:last-of-type) {
        margin-bottom: 14px;
      }

      .sim-notice--icon {
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .sim-notice--content {
        margin-left: 16px;
        display: flex;
        flex: 1;
        flex-direction: column;

        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .sub-title {
          font-size: 12px;
          color: var(--el-color-info);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
</style>
