<!-- K线图 -->
<template>
  <div class="charts" id="kLine"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'doubleBar',
  props: {
    // BarCharts
  },
  data() {
    return {
      // to be done
    }
  },
  methods: {
    getData() {
      // to be done
    },
    getInit() {
      const element = document.querySelector('#kLine');
      const myCharts = echarts.init(element);
      const options = {
        legend: {
          data: ['wx发布']
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
          left: '5%',
          top: '20%',
          width: '100%'
        },
        xAxis: { 
          data: ['mon', 'tue', 'wed', 'thu'],
          type: 'category',
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            data: [10, 20, 30, 20]
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
