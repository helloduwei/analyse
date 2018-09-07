<template>
  <div class="content">
    <User />
    <div class="main">
      <div class="chartSection">
        <div class="title">
          <div v-for="(bar, barIndex) in barTabs" :key="barIndex" :class="{tab: true, active: bar === activeBar}" @click="toggleBar(bar)">
            {{bar}}
          </div>
        </div>
        <Time v-bind:hasYesterDay="true" eleId="date1" v-on:fetchRange="getBarRange" />
        <DoubleBar v-if="activeBar === '分享转发数'" v-bind:barData="doubleBarOptions" />
        <Bar v-if="activeBar === '微信收藏数'" v-bind:barData="barOptions" eleId="bar1" />
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(page, pageIndex) in pageTabs" :key="pageIndex" :class="{tab: true, active: page === activePage}" @click="togglePage(page)">
            {{page}}
          </div>
        </div>
        <Time eleId="date2" v-on:fetchRange="getPageRange"/>
        <div v-for="(item, index) in pageData" class="hotPage" :key="index">
          <p class="pTitle">
            <span>{{item.title}}</span>
            <span>{{item.datetime}}</span>
          </p>
          <p class="pInfo">
            <span>{{`频率：${item.columnname}  微信号：${item.wxname}`}}</span>
            <span>{{`阅读数：${item.read}  转发数：${item.share}`}}</span>
          </p>
        </div>
      </div>
      <div class="chartSection">
        <div class="boldTitle">
          稿件三审情况
          <img src="../assets/img/data_title.png" alt="">
        </div>
        <KLine eleId="k1" v-bind:data="kWXData" />
        <KLine eleId="k2" v-bind:data="kWBData" />
      </div>
    </div>
  </div>
</template>

<script>
import Common from '../common/common'
import * as Apis from '../common/api'
import User from '../components/User'
import Time from '../components/Time'
import DoubleBar from '../components/DoubleBar'
import Bar from '../components/Bar'
import KLine from '../components/KLine'
export default {
  name: 'pageSummaryPage',
  components: {
    User,
    Time,
    DoubleBar,
    Bar,
    KLine
  },
  data() {
    return {
      barTabs: [
        '分享转发数', '微信收藏数', '微博评论数', '微博点赞数'
      ],
      activeBar: '分享转发数',
      pageTabs: [
        '微信热门稿件', '微博热门稿件'
      ],
      activePage: '微信热门稿件',
      shareData: [],
      doubleBarOptions: {
        legend: [],
        yAxis: [],
        series: []
      },
      barOptions: {},
      kOptions: {},
      pieOptions: {},
      pages: [],
      barRange: {},
      pageRange: {},
      pageData : [],
      kWXData: {
        series: [],
        xAxis: [],
        color: '#7ee23c',
        title: '微信发布'
      },
      kWBData: {
        series: [],
        xAxis: [],
        color: '#f46443',
        title: '微博发布'
      }
    }
  },
  methods: {
    getShareData() {
      Common.myFetch(Apis.PS_WX_SHARE_DEV, Apis.PS_WX_SHARE_Path, this.barRange)
      .then((data) => {
        this.shareData = data
        this.handleShareData()
      })
    },
    handleShareData() {
      const yAxis = [] // 飓风图和柱状图Y轴
      const legend = ['微信稿件发布', '微博稿件发布'] // 飓风图legend
      const seriesWX = [] //飓风图微信
      const seriesWB = [0] //飓风图微博
      const barX = [] // 柱状图微信
      this.shareData.forEach((item) => {
        yAxis.push(item.title)
        seriesWX.push(item.share - 0)
        barX.push(item.follow - 0)
      })
      this.doubleBarOptions = {
        legend: legend,
        y: yAxis,
        series: [
          {
            name: '微信稿件发布',
            type: 'bar',
            stack: 'one',
            data: seriesWX,
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              color: '#7ee23c'
            }
          }, {
            name: '微博稿件发布',
            type: 'bar',
            stack: 'two',
            data: seriesWB,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#f46443'
            }
          }
        ]
      }
      this.barOptions = {
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: yAxis
        },
        series: [{
          data: barX,
          type: 'bar'
        }]
      }
    },
    getHotPages() {
      Common.myFetch(Apis.PS_HOT_PAGES_DEV, Apis.PS_HOT_PAGES_Path, this.pageRange)
      .then((data) => {
        this.pageData = data
      })
    },
    getExams() {
      Common.myFetch(Apis.PS_EXAM_PAGES_DEV, Apis.PS_EXAM_PAGES_Path, {})
      .then((data) => {
        this.WxExams = data
        this.handleExams()
      })
    },
    handleExams() {
      const x = []
      const s_wx = []
      const s_wb = []
      this.WxExams.weixin.forEach((item) => {
        x.push(item.step_name)
        s_wx.push(item.num - 0)
        s_wb.push(0)
      })
      this.kWXData.xAxis = x
      this.kWXData.series = s_wx
      this.kWBData.xAxis = x
      this.kWBData.series = s_wb
    },
    getScenes() {
      Common.myFetch(Apis.PS_SCENES_DEV, Apis.PS_SCENES_Path, {})
      .then((data) => {
        console.log('scenes', data)
      })
    },
    toggleBar(bar) {
      if (bar === '微博评论数' || bar === '微博点赞数') {
        alert('暂无微博数据')
        return
      }
      this.activeBar = bar
    },
    togglePage(page) {
      if (page === '微博热门稿件') {
        alert('暂无微博数据')
        return
      }
      this.activePage = page
      this.getHotPages()
    },
    getBarRange(r) {
      this.barRange = r
      this.getShareData()
    },
    getPageRange(r) {
      this.pageRange = r
      this.getHotPages()
      console.log(r)
    },
    getSceneRange(r) {
      console.log(r)
    }
  },
  mounted() {
    this.getExams()
  }
}
</script>

<style lang="less" scoped src="../assets/css/pageSummary.less"></style>
