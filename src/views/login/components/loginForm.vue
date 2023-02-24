<template>
  <el-form
    ref="formRef"
    class="sim-form"
    :model="formModel"
    :rules="FORM_RULES"
  >
    <div class="sim-form--title">{{ translateTitle('welcome') }}</div>
    <el-form-item prop="userName">
      <el-input
        v-model.trim="formModel.userName"
        class="sim-form--input"
        :placeholder="translateTitle('userName')"
        type="text"
      >
        <template #prefix>
          <el-icon :size="20">
            <User />
          </el-icon>
        </template>
      </el-input>
      <template #error="{ error }">
        <FormErrorMsg :title="error" />
      </template>
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        v-model.trim="formModel.password"
        class="sim-form--input"
        :placeholder="translateTitle('password')"
        :type="isPassword ? 'password' : 'text'"
      >
        <template #prefix>
          <el-icon :size="20">
            <Lock />
          </el-icon>
        </template>
        <template #suffix>
          <el-icon :size="20" @click="isPassword = !isPassword">
            <Hide v-if="isPassword" />
            <View v-else />
          </el-icon>
        </template>
      </el-input>
      <template #error="{ error }">
        <FormErrorMsg :title="error" />
      </template>
    </el-form-item>

    <el-form-item prop="code">
      <div class="sim-code--row">
        <el-input
          v-model.trim="formModel.code"
          class="sim-form--input"
          :placeholder="translateTitle('code')"
          type="text"
          :disabled="true"
        >
          <template #prefix>
            <el-icon :size="20">
              <ChatRound />
            </el-icon>
          </template>
        </el-input>
        <canvas id="sim-code" class="code-image"></canvas>
        <img
          class="code-image"
          :src="codeImage"
          alt="Code"
          @click="refreshCode"
        />
      </div>

      <template #error="{ error }">
        <FormErrorMsg :title="error" />
      </template>
    </el-form-item>

    <el-form-item class="sim-form--tools">
      <router-link to="#" class="sim-form--a">
        <div>{{ translateTitle('register') }}</div>
      </router-link>
      <router-link to="#" class="sim-form--a">
        <div>{{ translateTitle('forgotPassword') }}</div>
      </router-link>
    </el-form-item>

    <el-button
      class="sim-form--submit"
      type="primary"
      :loading="loading"
      :disabled="isDisabled"
      @click="handleLogin(formRef)"
    >
      {{ translateTitle('login') }}
    </el-button>

    <div class="sim-divider">
      <span class="line"></span>
      <span class="title">第三方登录</span>
      <span class="line"></span>
    </div>

    <el-form-item class="svg-container">
      <tripartite-login />
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    reactive,
    toRefs,
    ref,
    computed,
    defineComponent,
    onMounted,
  } from 'vue'
  import { useRouter } from 'vue-router'
  import { FORM_RULES } from '../config/index'
  import { translateTitle } from '@/hooks/translate/index'
  import { UserModuleStore } from '@/store/modules/user.modules'
  import FormErrorMsg from '@/components/FormErrorMsg/index.vue'
  import RandomCodeToCanvas from '@/utils/verificationCode/index'
  import { getNowTimeTitle } from '@/utils'
  import useLoading from '@/hooks/loading'
  import TripartiteLogin from './tripartiteLogin.vue'
  import { simNotice } from '@/utils/ele'

  export default defineComponent({
    name: 'LoginForm',
    components: {
      FormErrorMsg,
      TripartiteLogin,
    },
    setup() {
      const initFormModelFun = () => {
        return {
          userName: 'admin',
          password: '123',
          code: '',
        }
      }

      const router = useRouter()
      const formRef = ref()
      const userStore = UserModuleStore()
      const { loading, setLoading } = useLoading(false)

      const state = reactive({
        formModel: initFormModelFun(),
        codeImage: '',
        FORM_RULES,
        isPassword: true,
        passwordType: 'password',

        isDisabled: computed(() => {
          const { userName, password } = state.formModel
          return !userName || !password
        }),
      })

      const handlerState = reactive({
        refreshCode: () => {
          const { url, code } = new RandomCodeToCanvas().randomCode()
          state.codeImage = url
          state.formModel.code = code
        },
        handleLogin: async (form) => {
          if (!form) return
          await form.validate(async (valid) => {
            if (!valid) return

            try {
              setLoading(true)
              const result = await userStore.SET_LOGIN(state.formModel)
              if (result) {
                const { name, isMale } = result
                const nameString =
                  name.substring(0, 1) + (isMale ? '先生' : '女士')
                simNotice({
                  title: '登录成功',
                  message: `${nameString}, ${getNowTimeTitle()}, 欢迎回来!`,
                  type: 'success',
                })
                await router.push('/')
              }
            } finally {
              setTimeout(() => setLoading(false), 2000)
            }
          })
        },
      })

      onMounted(() => {
        handlerState.refreshCode()
      })

      return {
        formRef,
        loading,
        translateTitle,
        ...toRefs(state),
        ...toRefs(handlerState),
      }
    },
  })
</script>

<style scoped lang="scss">
  @import '../css/login.scss';
</style>
