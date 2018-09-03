<!-- 双向飓风图 -->
<template>
  <div class="charts" id="doubleCharts"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'doubleCharts',
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
      const element = document.querySelector('#doubleCharts');
      const myCharts = echarts.init(element);
      const isWX = [10, 20];
      const isNotWX = [20, 30];
      const isWB = [20, 30];
      const isNotWB = [10, 30];
      const options = {
        legend: {
          data: ['wx', 'notWX', 'wb', 'notWB']
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
            data: [10, 20, 30, 40],
            type: 'value',
            inverse: true
          },
          { 
            gridIndex: 1,
            data: [10, 20, 30, 40],
            type: 'value'
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            data: ['1', '2'],
            type: 'category',
            position: 'right',
            offset: 90,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          {
            gridIndex: 1,
            data: ['1', '2'],
            type: 'category',
            show: false
          }
        ],
        series: [
          {
            name: 'wx',
            type: 'bar',
            stack: 'one',
            data: isWX,
            xAxisIndex: 0,
            yAxisIndex: 0,
          },
          {
            name: 'notWX',
            type: 'bar',
            stack: 'one',
            data: isNotWX,
            xAxisIndex: 0,
            yAxisIndex: 0,
          },
          {
            name: 'wb',
            type: 'bar',
            stack: 'two',
            data: isWB,
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
          {
            name: 'notWB',
            type: 'bar',
            stack: 'two',
            data: isNotWB,
            xAxisIndex: 1,
            yAxisIndex: 1,
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
