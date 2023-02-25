<template>
  <div :id="echartId" style="width: 100%; height: 100%"></div>
</template>

<script>
  import * as echarts from 'echarts'
  import {
    reactive,
    toRefs,
    nextTick,
    onBeforeMount,
    onBeforeUnmount,
  } from 'vue'
  import { useDebounceFn } from '@vueuse/core'

  export default {
    name: 'SimEchart',
    setup() {
      const state = reactive({
        echartId: '',
        options: {},
        initEchart: (id, options) => {
          state.echartId = id
          state.options = options
          nextTick(() => {
            state.setEchartsData()
          })
        },

        setEchartsData: () => {
          const chart = echarts.init(document.getElementById(state.echartId))

          const option = {
            title: {
              text: 'ECharts 入门示例',
            },
            tooltip: {},
            legend: {
              data: ['销量'],
            },
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
              },
            ],
          }
          state.resizeEchartData()
          chart.setOption({ ...state.options, ...option })
        },

        resizeEchartData: () => {
          const chart = echarts.init(document.getElementById(state.echartId))
          chart.resize()
        },
      })

      const debounceFn = useDebounceFn(state.resizeEchartData, 100)
      onBeforeMount(() => {
        window.addEventListener('resize', debounceFn)
      })
      onBeforeUnmount(() => {
        window.addEventListener('resize', debounceFn)
      })

      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style lang="scss" scoped></style>
