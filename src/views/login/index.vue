<template>
  <el-row class="sim-row" align="middle">
    <el-col :lg="4" :md="2" :sm="1" :xl="4" :xs="1"></el-col>
    <el-col
      class="sim-row--content"
      :lg="16"
      :md="20"
      :sm="22"
      :xl="16"
      :xs="22"
    >
      <el-row>
        <el-col :lg="12" :md="12" :sm="0" :xl="12" :xs="0" class="content-left">
          <img
            class="logo-cover"
            :src="require('@/assets/images/logo_cover.svg')"
            alt=""
          />
        </el-col>
        <el-col :lg="12" :md="12" :sm="24" :xl="12" :xs="24" :offset="0">
          <loginFormVue />
        </el-col>
      </el-row>
    </el-col>
    <el-col :lg="4" :md="2" :sm="1" :xl="4" :xs="1"></el-col>
  </el-row>
</template>

<script>
  import { defineComponent } from 'vue'
  import loginFormVue from './components/loginForm.vue'

  export default defineComponent({
    name: 'LoginIndex',
    components: {
      loginFormVue,
    },
  })
</script>

<style scoped lang="scss">
  @import './css/index.scss';
</style>
