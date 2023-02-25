<template>
  <el-card shadow="hover" class="sim-entrance">
    <template #header>
      <div class="sim-entrance--header">
        <span>
          <sim-icon icon="fa-drafting-compass" class="sim-icon" />
          快捷入口
        </span>

        <el-button type="primary" size="small" plain>更多</el-button>
      </div>
    </template>

    <el-row :gutter="20">
      <el-col :xs="12" :sm="8" :md="4" :offset="0">
        <el-card shadow="hover" class="sim-gruid--item">
          <img :src="require('@/assets/icons/biaoge.svg')" alt="" />
          <div>Excel</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="8" :md="4" :offset="0">
        <el-card shadow="hover" class="sim-gruid--item">
          <img :src="require('@/assets/icons/quanxian.svg')" alt="" />
          <div>菜单权限</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="8" :md="4" :offset="0">
        <el-card shadow="hover" class="sim-gruid--item">
          <img :src="require('@/assets/icons/liebiao.svg')" alt="" />
          <div>列表</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="8" :md="4" :offset="0">
        <el-card shadow="hover" class="sim-gruid--item">
          <img :src="require('@/assets/icons/shangchuan.svg')" alt="" />
          <div>文件上传</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="8" :md="4" :offset="0">
        <el-card shadow="hover" class="sim-gruid--item">
          <img :src="require('@/assets/icons/guanyuwomen.svg')" alt="" />
          <div>关于作者</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="8" :md="4" :offset="0">
        <el-card shadow="hover" class="sim-gruid--item">
          <img :src="require('@/assets/icons/shengji.svg')" alt="" />
          <div>网站升级</div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'SimEntrance',
    setup() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .sim-entrance {
    margin-top: 14px;

    & > :deep(.el-card__body) {
      padding-bottom: 0px;
    }
    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sim-gruid--item {
      text-align: center;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
</style>
