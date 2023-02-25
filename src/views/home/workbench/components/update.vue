<template>
  <el-row :gutter="20" class="sim-update">
    <el-col :xs="24" :sm="24" :md="12" :offset="0">
      <el-card shadow="hover" class="sim-left sim-update--container">
        <template #header>
          <div class="sim-update--header">
            <span>
              <sim-icon icon="fa-chart-bar" class="sim-icon" />
              更新记录
            </span>

            <el-tag>月</el-tag>
          </div>
        </template>
        <sim-echart ref="echartRef" />
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :offset="0">
      <el-card shadow="hover" class="sim-right sim-update--container">
        <template #header>
          <div class="sim-update--header">
            <span>
              <sim-icon icon="fa-history" class="sim-icon" />
              更新日志
            </span>
          </div>
        </template>

        <el-scrollbar>
          <el-timeline>
            <el-timeline-item
              v-for="(item, index) in list"
              :key="index"
              :type="index === 0 ? 'success' : ''"
              :timestamp="item.createTime"
              hollow
            >
              <div class="sim-timeline--title">
                <span>{{ item.title }}</span>
                <el-tag v-if="index === 0" type="danger">New</el-tag>
              </div>
              <div class="sim-timeline--subTitle">{{ item.desc }}</div>
            </el-timeline-item>
          </el-timeline>
        </el-scrollbar>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import Notice from '@/api/notice'
  import SimEchart from '@/components/SimEchart'

  export default {
    name: 'SimUpdate',
    components: {
      SimEchart,
    },
    setup() {
      const echartRef = ref()
      const list = ref([])
      const getUpdateData = async () => {
        const { data = null } = await Notice.getUpdateList()
        list.value = data.list || []
      }

      onMounted(() => {
        echartRef.value?.initEchart('sim-update--echart')
        getUpdateData()
      })

      return { list, echartRef }
    },
  }
</script>

<style lang="scss" scoped>
  .sim-update {
    &--container {
      margin-top: 14px;

      :deep(.el-card__body) {
        height: 340px;
      }
      .sim-update--header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .sim-timeline {
      &--title {
        margin-bottom: 6px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &--subTitle {
        font-size: 14px;
        color: var(--el-color-info);
      }
    }
  }
</style>
