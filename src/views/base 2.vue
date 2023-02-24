<template>
  <div>
    <div class="text-base"></div>
    <div>
      {{ translateTitle('home') }}
    </div>

    <el-row class="mb-4">
      <el-button type="success" @click="toRequest">请求</el-button>
      <el-button type="info" @click="toggleEn">切换英文</el-button>
      <el-button type="warning" @click="toggleZh">切换中文</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script>
  import { AppMoudleStore } from '@/store/moudles/app.moudles'
  import { translateTitle } from '@/utils/translate'
  import User from '@/api/user.proxy'

  export default {
    // eslint-disable-next-line vue/no-reserved-component-names
    name: 'Base',
    setup() {
      const app = AppMoudleStore()

      const toRequest = async () => {
        const result = await User.login('123', '123')
        console.log(result)
      }
      const toggleEn = () => {
        app.SET_LANGUAGE('en')
      }

      const toggleZh = () => {
        app.SET_LANGUAGE('zh')
      }

      return {
        toRequest,
        toggleEn,
        toggleZh,
        translateTitle,
      }
    },
  }
</script>

<style scoped lang="scss">
  .text-base {
    color: $sim-color-primary;
  }
</style>
