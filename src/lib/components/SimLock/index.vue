<template>
  <teleport to="body">
    <el-form ref="formRef" :model="formModel" :rules="formRule">
      <div class="sim-lock">
        <div
          class="sim-lock--image"
          :style="{
            background: `url(${getLockImage}) center center/100% 100% fixed`,
          }"
        ></div>
        <div class="sim-lock--content">
          <div class="author-container">
            <el-avatar
              :src="getUserInfo.author"
              size="large"
              class="author-icon"
            />
            <div class="tip-row">
              <el-icon class="icon-lock" size="20"><Lock /></el-icon>
              Simplify-Admin屏幕已锁定，请输入密码解锁🔓
            </div>
            <el-form-item prop="password">
              <div class="input-container">
                <el-input
                  v-model="formModel.password"
                  class="input-row"
                  type="password"
                  placeholder="请输入密码, 密码为：123"
                  show-password
                  clearable
                  size="large"
                ></el-input>
                <el-button
                  class="button-row"
                  type="primary"
                  size="large"
                  icon="Lock"
                  @click="toUnlock(formRef)"
                >
                  解锁
                </el-button>
              </div>
              <template #error="{ error }">
                <form-error-msg :title="error" />
              </template>
            </el-form-item>

            <div class="pic-row">
              <el-button
                class="button-row"
                type="primary"
                text
                size="large"
                @click="changeImage"
              >
                切换壁纸
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </el-form>
  </teleport>
</template>

<script>
  import { defineComponent, toRefs, reactive, computed, ref } from 'vue'
  import { AppModuleStore } from '@/store/modules/app.modules'
  import { UserModuleStore } from '@/store/modules/user.modules'
  import { ToolsModuleStore } from '@/store/modules/tools.modules'
  import FormErrorMsg from '@/components/FormErrorMsg/index.vue'
  import { translateTitle } from '@/hooks/translate'
  import Tools from '@/api/tools'

  export default defineComponent({
    name: 'SimLock',
    components: {
      FormErrorMsg,
    },
    setup() {
      const formRef = ref()
      const store = UserModuleStore()
      const toolsStore = ToolsModuleStore()
      const appStore = AppModuleStore()
      const state = reactive({
        formModel: {
          password: '123',
        },
        formRule: {
          password: [
            {
              required: true,
              trigger: 'blur',
              validator: (rule, value, callback) => {
                if (value !== '123') {
                  return callback(new Error(translateTitle('lockPass')))
                }
                callback()
              },
            },
          ],
        },
        getUserInfo: computed(() => store.GET_USER_INFO),
        getLockImage: computed(() => toolsStore.GET_LOCK_IMAGE),

        toUnlock: async (elForm) => {
          if (!elForm) return
          await elForm.validate((valid) => {
            if (!valid) return
            appStore.SET_IS_LOCK(false)
          })
        },

        changeImage: async () => {
          const { data = null } = await Tools.getDmImage({ format: 'image' })
          if (data) {
            toolsStore.SET_LOCK_IMAGE(data.url)
          }
        },
      })

      return {
        formRef,
        ...toRefs(state),
      }
    },
  })
</script>

<style scoped lang="scss">
  .sim-lock {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: 5000;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    &--image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 4999;
      filter: blur(10px);
    }

    &--content {
      padding: 50px 100px;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      text-align: center;
      z-index: 5200;

      .author-icon {
        width: 140px;
        height: 140px;
        margin-bottom: 20px;
      }

      .tip-row {
        display: flex;
        align-items: center;
        letter-spacing: 1px;
        .icon-lock {
          margin-right: 6px;
        }
      }

      .input-container {
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex: 1;

        .input-row {
          :deep(.el-input__wrapper) {
            border-radius: 0;
          }
        }

        .button-row {
          border-radius: 0;
        }
      }

      .pic-row {
        margin-top: 30px;
      }
    }
  }
</style>
