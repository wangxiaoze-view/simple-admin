<template>
  <el-card shadow="hover" class="sim-welcome">
    <el-row>
      <el-col :lg="10" class="hidden-md-and-down">
        <img
          class="sim-welcome--image"
          :src="require('@/assets/images/welcome.svg')"
        />
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="14">
        <div class="sim-welcome--title">{{ getTitle }}</div>
        <div class="sim-welcome--subTitle">
          ip为：上海市 天气☁️：晴 温度🌡️：正常 湿度正常
        </div>

        <div class="sim-welcome--subTitle">
          <el-space wrap :size="30">
            <span>
              <sim-icon icon="fa-envelope" class="sim-icon" />
              未处理邮件
              <b class="font-red">(20)</b>
            </span>
            <span>
              <sim-icon icon="fa-bug" class="sim-icon" />
              未处理bug
              <b class="font-green">(0)</b>
            </span>
            <span>
              <sim-icon icon="fa-list-ol" class="sim-icon" />
              代办事项
              <b class="font-red">(3)</b>
            </span>
          </el-space>
        </div>
        <div class="sim-welcome--subTitle">今日的任务还未完成呦～</div>

        <div class="sim-welcome--subTitle">
          前端日记：
          <a href="http://www.wangxiaoze.wang" target="_blank">
            http://www.wangxiaoze.wang
          </a>
        </div>
        <div class="sim-welcome--subTitle">
          仓库地址：
          <a
            href="https://github.com/wangxiaoze-view/simple-admin"
            target="_blank"
          >
            https://github.com/wangxiaoze-view/simple-admin
          </a>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import { reactive, toRefs, computed } from 'vue'
  import { getNowTimeTitle } from '@/utils'
  import { UserModuleStore } from '@/store/modules/user.modules'

  export default {
    name: '',
    setup() {
      const userStore = UserModuleStore()
      const state = reactive({
        getTitle: computed(
          () =>
            `${getNowTimeTitle()}，${
              userStore.GET_USER_INFO.name
            }，不断进步，是治疗失意和自卑的最佳方式`
        ),
      })
      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sim-welcome {
    :deep(.el-card__body) {
      height: 280px;
    }
    &--image {
      margin-top: -40px;
    }
    &--title {
      font-size: 22px;
      color: #343844;
    }

    &--subTitle {
      font-size: 16px;
      color: #6b7687;
      margin-top: 24px;

      a {
        color: var(--el-color-primary);
        text-decoration: none;
      }
    }

    .font-red {
      color: var(--el-color-danger);
    }
    .font-green {
      color: var(--el-color-success);
    }
  }
</style>
