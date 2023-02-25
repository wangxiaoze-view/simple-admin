<template>
  <el-card shadow="hover" class="sim-package">
    <template #header>
      <div class="sim-package--header">
        <span>
          <sim-icon icon="fa-info-circle" class="sim-icon" />
          系统信息
        </span>
        <el-button type="primary" size="small" plain>更多</el-button>
      </div>
    </template>
    <div class="sim-package--table">
      <el-descriptions :column="4" border>
        <el-descriptions-item
          label="Vue"
          label-align="right"
          align="center"
          width="120px"
        >
          {{ packageJson.dependencies.vue }}
        </el-descriptions-item>
        <el-descriptions-item
          label="Element-Plus"
          label-align="right"
          align="center"
          width="150px"
        >
          {{ packageJson.dependencies['element-plus'] }}
        </el-descriptions-item>
        <el-descriptions-item
          label="axios"
          label-align="right"
          align="center"
          width="150px"
        >
          {{ packageJson.dependencies.axios }}
        </el-descriptions-item>
        <el-descriptions-item label="pinia" label-align="right" align="center">
          {{ packageJson.dependencies.pinia }}
        </el-descriptions-item>

        <el-descriptions-item label="mockjs" label-align="right" align="center">
          {{ packageJson.dependencies.mockjs }}
        </el-descriptions-item>

        <el-descriptions-item
          label="nprogress"
          label-align="right"
          align="center"
        >
          {{ packageJson.dependencies.nprogress }}
        </el-descriptions-item>

        <el-descriptions-item
          label="vue-cookies"
          label-align="right"
          align="center"
        >
          {{ packageJson.dependencies['vue-cookies'] }}
        </el-descriptions-item>

        <el-descriptions-item
          label="vue-i18n"
          label-align="right"
          align="center"
        >
          {{ packageJson.dependencies['vue-i18n'] }}
        </el-descriptions-item>

        <el-descriptions-item
          label="vue-router"
          label-align="right"
          align="center"
        >
          {{ packageJson.dependencies['vue-router'] }}
        </el-descriptions-item>

        <el-descriptions-item label="其他" label-align="right" align="left">
          <el-button
            type="primary"
            @click="
              openWindow(
                'https://github.com/wangxiaoze-view/simple-admin',
                'simple-admin'
              )
            "
          >
            查看源码
          </el-button>
          <el-button
            type="warning"
            @click="openWindow('http://www.wangxiaoze.wang/', '前端日记')"
          >
            前端日记
          </el-button>
          <el-button
            type="info"
            @click="openWindow('https://fontawesome.com.cn/', 'fontawesome')"
          >
            系统icon地址
          </el-button>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
</template>

<script>
  import packageJson from '../../../../../package.json'

  export default {
    name: 'SimPackage',
    setup() {
      const openWindow = (url, title) => {
        window.open(
          url,
          title,
          'left=100,screenX=200,resizable,scrollbars,status'
        )
      }
      return {
        packageJson,
        openWindow,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sim-package {
    margin-top: 14px;
    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
