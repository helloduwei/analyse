<!-- 饼图组件 -->
<template>
  <div class="charts" :id="eleId"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'pie',
  props: {
    pieData: Object,
    eleId: String
  },
  data() {
    return {
      chartInstance: null
    }
  },
  watch: {
    pieData: {
      deep: true,
      handler: function(newer, old) {
        this.getInit()
      }
    }
  },
  methods: {
    getInit() {
      console.log('data', this.pieData)
      let myCharts = this.chartInstance
      if (myCharts) {
        myCharts.dispose()
      }
      const elementId = '#' + this.eleId
      const element = document.querySelector(elementId);
      myCharts = echarts.init(element);
      const options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          data: this.pieData.legend || []
        },
        series: [{
          type: 'pie',
          radius: ['50%', '70%'],
          label: {
            normal: {
              show: false
            }
          },
          data: this.pieData.series || []
        }],
        color: ['#4dacf4', '#34659f', '#fcc01b', '#f97d61', '#4cdab0', '#cf8aec', '#beda4c']
      }

      myCharts.setOption(options)
    }
  },
  mounted() {
    this.getInit();
  }
}
</script>

<style lang="less" scoped>
.charts {
  width: 50%;
  height: 400px;
  display: inline-block;
}
</style>
