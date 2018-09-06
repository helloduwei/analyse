<!-- K线图 -->
<template>
  <div class="charts" :id="eleId"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'doubleBar',
  props: {
    data: Object,
    eleId: String
  },
  data() {
    return {
      // to be done
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function(newer, old) {
        if (newer) {
          this.getInit()
        }
      }
    }
  },
  methods: {
    getData() {
      // to be done
    },
    getInit() {
      const elementId = '#' + this.eleId
      const element = document.querySelector(elementId);
      const myCharts = echarts.init(element);
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
    this.getInit();
  }
}
</script>

<style lang="less" scoped>
.charts {
  // to be
  height: 400px;
}
</style>
