<!-- 地图组件 -->
<template>
  <div class="charts" :id="eleId"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'mapChart',
  props: {
    mapData: Object,
    eleId: String
  },
  data() {
    return {
      chartInstance: null
    }
  },
  watch: {
    mapData: {
      deep: true,
      handler: function(newer, old) {
        this.getInit()
      }
    }
  },
  methods: {
    getInit() {
      console.log('data', this.mapData)
      this.getGeo()
      .then((data) => {
        echarts.registerMap('china', data)
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
          series: [{
            name: this.mapData.name,
            type: 'map',
            map: 'china',
            data: this.mapData.series || [],
            itemStyle: {
              areaColor: '#1b93ec',
              borderColor: '#fff',
            },
            emphasis: {
              itemStyle: {
                areaColor: '#8ecdf2'
              }
            }
          }]
        }

        myCharts.setOption(options)
      })
    },
    getGeo () {
      return fetch('./src/js/china.json')
      .then((res) => {
        return res.json()
      })
    }
  },
  mounted() {
    this.getInit();
  }
}
</script>

<style lang="less" scoped>
.charts {
  width: 100%;
  height: 400px;
  display: inline-block;
}
</style>
