<template>
  <div class="charts" id="bar">
    
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'Charts',
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
      // do be done
      const element = document.querySelector('#bar');
      const myCharts = echarts.init(element);
      const isWX = [10, 20];
      const isNotWX = [20, 30];
      const options = {
        legend: {
          data: ['wx', 'notWX', 'wb', 'notWB']
        },
        tooltip: {},
        grid: [
          {
            x: '0%',
            y: '0%',
            width: '50%'
          },
          {
            x: '50%',
            y: '0%',
            width: '50%'
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
            position: 'right'
          },
          {
            gridIndex: 1,
            data: ['1', '2'],
            type: 'category'
          }
        ],
        series: [
          {
            name: 'wx',
            type: 'bar',
            stack: 'one',
            data: isWX
          },
          {
            name: 'notWX',
            type: 'bar',
            stack: 'one',
            data: isNotWX
          },
          {
            name: 'wb',
            type: 'bar',
            stack: 'one',
            data: isWX
          },
          {
            name: 'notWB',
            type: 'bar',
            stack: 'one',
            data: isNotWX
          }
        ],
        xAxis: {
          id: 'wb',
          data: [10, 20, 30, 40],
          type: 'value'
        },
        yAxis: {
          id: 'wx',
          data: ['1', '2'],
          type: 'category'
        },
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
