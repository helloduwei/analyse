<!-- 柱状图组件 -->
<template>
  <div class="charts" :id="eleId"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'bar',
  props: {
    barData: Object,
    eleId: String
  },
  data() {
    return {
      chartInstance: null
    }
  },
  watch: {
    barData: {
      deep: true,
      handler: function(newer, old) {
        this.getInit()
      }
    }
  },
  methods: {
    getData() {
      // to be done
    },
    getInit() {
      let myCharts = this.chartInstance
      if (myCharts) {
        myCharts.dispose()
      }
      const elementId = '#' + this.eleId
      const element = document.querySelector(elementId);
      myCharts = echarts.init(element);
      const options = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: this.barData.xAxis,
        yAxis: this.barData.yAxis,
        series: this.barData.series,
        itemStyle: {
            color: this.barData.color || '#7ee23c'
        }
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
  height: 400px;
}
</style>
