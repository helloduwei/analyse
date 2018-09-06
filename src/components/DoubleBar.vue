<!-- 双向飓风图 -->
<template>
  <div class="charts" id="doubleBar"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'doubleBar',
  props: {
    barData: Object
  },
  data() {
    return {
      // to be done
    }
  },
  watch: {
    barData: {
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
      console.log(123, this.barData.series)
      const element = document.querySelector('#doubleBar');
      const myCharts = echarts.init(element);
      const options = {
        legend: {
          data: this.barData.legend,
          right: '0'
        },
        tooltip: {},
        grid: [
          {
            left: '5%',
            top: '20%',
            width: '35%'
          },
          {
            left: '60%',
            top: '20%',
            width: '35%'
          }
        ],
        xAxis: [
          { 
            gridIndex: 0,
            // data: [10, 20, 30, 40],
            type: 'value',
            inverse: true
          },
          { 
            gridIndex: 1,
            // data: [10, 20, 30, 40],
            type: 'value'
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            data: this.barData.y,
            type: 'category',
            position: 'right',
            offset: 40,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          {
            gridIndex: 1,
            data: this.barData.y,
            type: 'category',
            show: false
          }
        ],
        series: this.barData.series
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
