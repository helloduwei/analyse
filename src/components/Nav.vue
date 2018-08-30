<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/img/SMG.png" alt="">
    </div>
    <div class="column" @click="jump('/summary')">
      概况
    </div>
    <div class="section" v-for="(item, index) in navis" :key="index">
      <div :class="{column: true, bar: true, on: item.active}" @click="toggle(item)">
        <span>{{item.title}}</span>
        <span class="toggle">{{item.active? '-' : '+'}}</span>
      </div>
      <div v-show="item.active" :class="{column: true, sub: true, active: sub.pageid === currentpage}" v-for="(sub, subindex) in item.subs" :key="subindex" @click="jump(sub.link)">
        <img :src="sub.pageid === currentpage ? sub.activeIcon : sub.icon" alt="sub.subtitle">
          {{sub.subtitle}}
      </div>
    </div>
  </div>
</template>

<script>
// icons
import dataSummary from '../assets/img/data-summary.png'
import dataSummaryOn from '../assets/img/data-summary-on.png'
import dataDetail from '../assets/img/data-detail.png'
import dataDetailOn from '../assets/img/data-detail-on.png'
import pageSummary from '../assets/img/page-summary.png'
import pageSummaryOn from '../assets/img/page-summary-on.png'
import wxPage from '../assets/img/wx-page.png'
import wxPageOn from '../assets/img/wx-page-on.png'
export default {
  name: 'Nav',
  data() {
    return {
      navis: [
        {
          title: '微信号数据',
          active: true,
          subs: [
            {
              pageid: 1,
              subtitle: '数据总览',
              icon: dataSummary,
              activeIcon: dataSummaryOn,
              link: '/data-summary'
            },
            {
              pageid: 2,
              subtitle: '数据详情',
              icon: dataDetail,
              activeIcon: dataDetailOn,
              link: '/data-detail'
            }
          ]
        },
        {
          title: '稿件数据',
          active: true,
          subs: [
            {
              pageid: 3,
              subtitle: '稿件总览',
              icon: pageSummary,
              activeIcon: pageSummaryOn,
              link: '/page-summary'
            },
            {
              pageid: 4,
              subtitle: '微信稿件',
              icon: wxPage,
              activeIcon: wxPageOn,
              link: '/wx-page'
            }
          ]
        }
      ],
      currentpage: 0,
    }
  },
  watch: {
    $route(to) {
      this.asyncRouteState(to.path)
    }
  },
  props: {
    // nav
  },
  methods: {
    jump (url) {
      this.$router.push({
        path: url
      })
    },
    asyncRouteState(path) {
      switch (path) {
        case '/summary':
        this.currentpage = 0;
        break;
        case '/data-summary':
        this.currentpage = 1;
        break;
        case '/data-detail':
        this.currentpage = 2;
        break;
        case '/page-summary':
        this.currentpage = 3;
        break;
        case '/wx-page':
        this.currentpage = 4;
        break;
        default:
        this.currentpage = 0;
      }
    },
    toggle(item) {
      item.active = !item.active
    }
  },
  mounted() {
    this.asyncRouteState(this.$router.history.current.path)
  }
}
</script>

<style lang="less" scoped>
  .logo {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: linear-gradient(to bottom, #1394f0, #22c5f7);
    img {
      vertical-align: middle;
    }
  }
  .column {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #cde3f1;
    color: #52687a;
    font-size: 16px;
    padding: 0 12px;
    cursor: pointer;
  }
  .section {
    .bar {
      display: flex;
      padding: 0 24px 0 12px;
      flex-direction: row;
      justify-content:space-between;
      .toggle {
        font-size: 22px;
        font-weight: lighter;
        color: #9cafbd;
      }
    }
    img {
      vertical-align: middle;
    }
    .sub {
      padding: 0 0 0 24px;
    }
    .active {
      background-color: #c5e5fa;
      color: #0091f2;
    }
  }
</style>
