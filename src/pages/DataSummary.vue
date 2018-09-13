<template>
  <div class="content">
    <User />
    <div class="main">
      <div class="chartSection">
        <div class="boldTitle">
          昨日数据
          <img src="../assets/img/data_title.png" alt="">
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
        <Time eleId="date1" v-on:fetchRange="getTrendRange" />
        <KLine eleId="k1" v-bind:data="trendKData" />
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(follow, followIndex) in followTabs" :key="followIndex" :class="{tab: true, active: follow === activeFollow}" @click="toggleFollow(follow)">
            {{follow}}
          </div>
        </div>
        <Time eleId="date2" v-on:fetchRange="getFollowRange" v-bind:hasYesterDay="true" />
        <Bar v-bind:barData="barOptions" eleId="bar1" />
      </div>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
import Time from '../components/Time.vue'
import Common from '../common/common'
import KLine from '../components/KLine.vue'
import Bar from '../components/Bar.vue'
export default {
  name: 'dataSummaryPage',
  components: {
    User,
    Time,
    KLine,
    Bar
  },
  data() {
    return {
      yesterday: {
        follow: 0,
        unfollow: 0,
        new: 0,
        total: 0
      },
      trendKData: {
        series: [],
        xAxis: [],
        color: '#154972',
        title: ''
      },
      barOptions: {},
      trendTabs: [
        '关注总数趋势', '新增人数趋势', '取消关注趋势', '净增人数趋势'
      ],
      activeTrend: '关注总数趋势',
      followTabs: [
        '关注总数', '新增人数', '取消关注人数', '净增人数'
      ],
      trendRange: {},
      followRange: {},
      activeFollow: '关注总数'
    }
  },
  methods: {
    toggleTrend(trend) {
      this.activeTrend = trend
    },
    toggleFollow(follow) {
      this.activeFollow = follow
    },
    getTrendRange(r) {
      this.trendRange = r
      this.getTrendData()
    },
    getFollowRange(r) {
      this.followRange = r
      this.getFollowData()
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
    getFollowData() {
      // Common.myFetch
      console.log(this.followRange)
      this.barOptions = {
        xAxis: {
          type: 'category',
          data: ['战略发展部', '899驾车调频'],
          axisLabel: {
            rotate: 90
        }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [40, 20],
          type: 'bar'
        }]
      }
    }
  }
}
</script>

<style lang="less" scoped src="../assets/css/dataSummary.less"></style>
