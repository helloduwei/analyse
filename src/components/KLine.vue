<!-- K线图 -->
<template>
  <div class="charts" id="kLine"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'doubleBar',
  props: {
    data: Object
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
      const element = document.querySelector('#kLine');
      const myCharts = echarts.init(element);
      const options = {
        legend: {
          right: '0',
          data: ['微信发布']
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
          data: this.data.xAxis,
          type: 'category',
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            name: '微信发布',
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
