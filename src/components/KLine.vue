<!-- K线图 -->
<template>
  <div class="charts" :id="eleId"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'kLine',
  props: {
    data: Object,
    eleId: String
  },
  data() {
    return {
      // to be done
      chartInstance: null
    }
  },
  watch: {
    data: {
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
        legend: {
          right: '0',
          data: [this.data.title]
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
          left: '5%',
          top: '20%',
          width: '100%'
        },
        itemStyle: {
          color: this.data.color,
        },
        xAxis: { 
          data: this.data.xAxis,
          type: 'category',
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            name: this.data.title,
            data: this.data.series
          }
        ]
      }

      myCharts.setOption(options)
    }
  },
  mounted() {
    // this.getInit();
  }
}
</script>

<style lang="less" scoped>
.charts {
  height: 400px;
}
</style>
