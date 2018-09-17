<template>
  <div class="content">
    <User />
    <div class="main">
      <div class="chartSection">
        <div class="boldTitle">
          {{weixin}}
          <img src="../assets/img/data_title.png" alt="">
          <span>昨日数据</span>
        </div>
        <div class="yst-cates">
          <div class="blue">新关注人数</div>
          <div class="yellow">取消关注人数</div>
          <div class="blue">净增关注人数</div>
          <div class="yellow">累计关注人数</div>
        </div>
        <div class="yst-data">
          <div class="blue">{{this.yesterday.follow}}</div>
          <div class="yellow">{{this.yesterday.unfollow}}</div>
          <div class="blue">{{this.yesterday.new}}</div>
          <div class="yellow">{{this.yesterday.total}}</div>
        </div>
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(trend, trendIndex) in trendTabs" :key="trendIndex" :class="{tab: true, active: trend === activeTrend}" @click="toggleTrend(trend)">
            {{trend}}
          </div>
        </div>
        <KLine eleId="k1" v-bind:data="trendKData" />
      </div>
      <div class="chartSection">
        <div class="boldTitle">
          用户属性
          <img src="../assets/img/data_title.png" alt="">
        </div>
        <Pie eleId="pie1" v-bind:pieData="genderData" />
        <Pie eleId="pie2" v-bind:pieData="langData" />
      </div>
      <div class="chartSection">
        <div class="boldTitle">
          地域分布
          <img src="../assets/img/data_title.png" alt="">
        </div>
        <Map eleId="map1" v-bind:mapData="mapData" />
      </div>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
import KLine from '../components/KLine.vue'
import Pie from '../components/Pie'
import Map from '../components/Map'
export default {
  name: 'wxDetailPage',
  components: {
    User,
    KLine,
    Pie,
    Map
  },
  data() {
    return {
      weixin: '微信号',
      yesterday: {
        follow: 0,
        unfollow: 0,
        new: 0,
        total: 0
      },
      trendTabs: [
        '关注总数趋势', '新增人数趋势', '取消关注趋势', '净增人数趋势'
      ],
      activeTrend: '关注总数趋势',
      trendKData: {
        series: [],
        xAxis: [],
        color: '#154972',
        title: ''
      },
      genderData: {
        legend: [],
        series: []
      },
      langData: {
        legend: [],
        series: []
      },
      mapData: {
        name: '关注用户',
        series: []
      }
    }
  },
  methods: {
    toggleTrend(trend) {
      this.activeTrend = trend
    },
    getTrendData() {
      // Common.myFetch()
      console.log(this.trendRange)
      this.trendKData = {
        series: [20, 40],
        xAxis: ['2018-9-1', '2018-9-2'],
        color: '#154972',
        title: ''
      }
    },
    getUserAttributes () {
      // handle user attributes data
    },
    getMapData() {
      // get map data
      this.mapData.series = [
        {name: '北京',value: 0},
        {name: '天津',value: 0},
        {name: '上海',value: 0},
        {name: '重庆',value: 0},
        {name: '河北',value: 0},
        {name: '河南',value: 0},
        {name: '云南',value: 0},
        {name: '辽宁',value: 0},
        {name: '黑龙江',value: 10},
        {name: '湖南',value: 12},
        {name: '安徽',value: 12},
        {name: '山东',value: 12},
        {name: '新疆',value: 12},
        {name: '江苏',value: 12},
        {name: '浙江',value: 12},
        {name: '江西',value: 12},
        {name: '湖北',value: 12},
        {name: '广西',value: 12},
        {name: '甘肃',value: 12},
        {name: '山西',value: 12},
        {name: '内蒙古',value: 20},
        {name: '陕西',value: 44},
        {name: '吉林',value: 44},
        {name: '福建',value: 44},
        {name: '贵州',value: 44},
        {name: '广东',value: 44},
        {name: '青海',value: 44},
        {name: '西藏',value: 44},
        {name: '四川',value: 44},
        {name: '宁夏',value: 44},
        {name: '海南',value: 44},
        {name: '台湾',value: 44},
        {name: '香港',value: 44},
        {name: '澳门',value: 44}
      ]
    }
  },
  mounted () {
    this.getTrendData()
    this.getUserAttributes()
    this.getMapData()
  }
}
</script>

<style lang="less" scoped src="../assets/css/wxDetail.less"></style>
