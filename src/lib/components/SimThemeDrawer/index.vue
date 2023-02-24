<template>
  <teleport to="body">
    <el-drawer v-model="visible" v-bind="drawerParams" class="sim-theme-set">
      <template #default>
        <el-scrollbar>
          <el-form :model="getTheme" label-width="80px" label-position="left">
            <el-form-item>
              <template #label>{{ translateTitle('layout') }}</template>
              <el-select v-model="getTheme.layout">
                <el-option
                  :label="translateTitle('ordinaryLayout')"
                  value="ordinary"
                />
                <el-option :label="translateTitle('rowLayout')" value="row" />
                <el-option
                  :label="translateTitle('floatLayout')"
                  value="float"
                />
              </el-select>
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('themeColors') }}</template>
              <el-select v-model="getTheme.themeName">
                <el-option
                  :label="translateTitle('themePurple')"
                  value="purple"
                />
                <el-option :label="translateTitle('themeBlue')" value="blue" />
                <el-option
                  :label="translateTitle('themeGreen')"
                  value="green"
                />
                <el-option :label="translateTitle('themeRed')" value="red" />
              </el-select>
            </el-form-item>

            <el-form-item>
              <template #label>
                {{ translateTitle('backgroundColor') }}
              </template>
              <el-radio-group>
                <el-radio>{{ translateTitle('themeWhite') }}</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('colorWeakness') }}</template>
              <el-switch v-model="getTheme.colorWeakness" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('headerFixed') }}</template>
              <el-switch v-model="getTheme.isHeaderFixed" />
            </el-form-item>

            <el-form-item>
              <template #label>
                {{ translateTitle('internationalization') }}
              </template>
              <el-switch v-model="getTheme.i18n" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('debug') }}</template>
              <el-switch v-model="getTheme.debug" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('locked') }}</template>
              <el-switch v-model="getTheme.isLock" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('fullPage') }}</template>
              <el-switch v-model="getTheme.fullPage" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('notice') }}</template>
              <el-switch v-model="getTheme.isNotice" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('refresh') }}</template>
              <el-switch v-model="getTheme.refresh" />
            </el-form-item>
            <el-form-item>
              <template #label>{{ translateTitle('breadcrumb') }}</template>
              <el-switch v-model="getTheme.breadcrumb" />
            </el-form-item>

            <el-form-item>
              <template #label>{{ translateTitle('footer') }}</template>
              <el-switch v-model="getTheme.isFooter" />
            </el-form-item>
          </el-form>
        </el-scrollbar>
      </template>
      <template #footer>
        <el-button @click="resetTheme">恢复默认</el-button>
        <el-button type="warning" @click="copyTheme">拷贝设置</el-button>
      </template>
    </el-drawer>
  </teleport>
</template>

<script>
  import { reactive, toRefs, computed, watch } from 'vue'
  import { useClipboard } from '@vueuse/core'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import { simMessage } from '@/utils/ele'
  import { translateTitle } from '@/hooks/translate'

  export default {
    name: 'SimThemeDrawer',
    setup() {
      const appStore = AppModuleStore()
      const { copy, isSupported } = useClipboard()
      const state = reactive({
        visible: false,
        drawerParams: {},

        getTheme: computed(() => appStore.GET_THEME),

        setVisible: (visible, params) => {
          state.visible = visible
          if (params) {
            state.drawerParams = params
          }
        },

        resetTheme: () => appStore.RESET_THEME(),
        copyTheme: () => {
          if (!isSupported) {
            return simMessage({
              message: '您的浏览器不支持Clipboard API',
              grouping: true,
              type: 'warning',
            })
          }

          console.log(copy)
          // import('@/config/theme.config').then((r) => {
          //   if (r.default) {
          //     copy(JSON.stringify(r.default))
          //     simMessage({
          //       message: '主题设置已拷贝',
          //       grouping: true,
          //       type: 'success',
          //     })
          //   }
          // })
        },
      })

      watch(
        () => state.getTheme,
        (val) => {
          appStore.SET_THEME(val)
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

<style scoped lang="scss"></style>

<style lang="scss">
  .sim-theme-set {
    .el-drawer__header {
      margin-bottom: 0;
    }
    .el-drawer__body {
      padding-right: 0;
    }
  }
</style>
