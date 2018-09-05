<template>
  <div class="content">
    <User />
    <div class="main">
      <!-- 昨日和整体数据展示 -->
      <div class="summaryLine">
        <div class="dataSummary">
          <p class="title">
            昨日数据
            <img src="../assets/img/data_title.png" alt="">
          </p>
          <div class="row">
            <div class="head"></div>
            <div class="number"><img src="../assets/img/wx.png" alt="wx"></div>
            <div class="number"><img src="../assets/img/wb.png" alt="wb"></div>
          </div>
          <div class="row dotLine">
            <div class="head">
              <img src="../assets/img/fagaoshu.png" alt="fagaoshu">
              发稿数
            </div>
            <div class="number">
              {{yesterday.pages.wx}}
            </div>
            <div class="number">
              {{yesterday.pages.wb}}
            </div>
          </div>
          <div class="row dotLine">
            <div class="head">
              <img src="../assets/img/yuedushu.png" alt="fagaoshu">
              阅读数
            </div>
            <div class="number">
              {{yesterday.read.wx}}
            </div>
            <div class="number">
              {{yesterday.read.wb}}
            </div>
          </div>
          <div class="row">
            <div class="head">
              <img src="../assets/img/yonghushu.png" alt="fagaoshu">
              新增用户数
            </div>
            <div class="number">
              {{yesterday.users.wx}}
            </div>
            <div class="number">
              {{yesterday.users.wb}}
            </div>
          </div>
        </div>
        <div class="dataSummary">
          <p class="title">
            整体数据
            <img src="../assets/img/data_title.png" alt="">
          </p>
          <div class="row">
            <div class="head"></div>
            <div class="number"><img src="../assets/img/wx.png" alt="wx"></div>
            <div class="number"><img src="../assets/img/wb.png" alt="wb"></div>
          </div>
          <div class="row dotLine">
            <div class="head">
              <img src="../assets/img/fagaoshu.png" alt="fagaoshu">
              总发稿数
            </div>
            <div class="number">
              {{all.pages.wx}}
            </div>
            <div class="number">
              {{all.pages.wb}}
            </div>
          </div>
          <div class="row dotLine">
            <div class="head">
              <img src="../assets/img/yuedushu.png" alt="fagaoshu">
              总阅读数
            </div>
            <div class="number">
              {{all.read.wx}}
            </div>
            <div class="number">
              {{all.read.wb}}
            </div>
          </div>
          <div class="row">
            <div class="head">
              <img src="../assets/img/yonghushu.png" alt="fagaoshu">
              总关注人数
            </div>
            <div class="number">
              {{all.users.wx}}
            </div>
            <div class="number">
              {{all.users.wb}}
            </div>
          </div>
        </div>
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(bar, barIndex) in barTabs" :key="barIndex" :class="{tab: true, active: bar === activeBar}" @click="toggleBar(bar)">
            {{bar}}
          </div>
        </div>
        <Time eleId="date1" v-on:fetchRange="getBarRange" />
        <DoubleBar />
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(k, kIndex) in kTabs" :key="kIndex" :class="{tab: true, active: k === activeK}" @click="toggleK(k)">
            {{k}}
          </div>
        </div>
        <Time eleId="date2" v-on:fetchRange="getKRange" />
        <KLine />
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(board, boardIndex) in boardTabs" :key="boardIndex" :class="{tab: true, active: board === activeBoard}" @click="toggleBoard(board)">
            {{board}}
          </div>
        </div>
        <Time eleId="date3" v-on:fetchRange="getBoardRange" />
        <div class="boards">
          <div class="board">
            <p class="title">
              稿件发布数排行
              <img src="../assets/img/data_title.png" alt="">
            </p>
            <ol class="boardData">
              <li v-for="(board, boardIndex) in boards" :key="boardIndex">
                <span>{{board.name}}</span>
                <span class="mount">{{board.mount}}</span>
              </li>
            </ol>
          </div>
          <div class="board">
            <p class="title">
              稿件发布数排行
              <img src="../assets/img/data_title.png" alt="">
            </p>
            <ol class="boardData">
              <li v-for="(board, boardIndex) in boards" :key="boardIndex">
                <span>{{board.name}}</span>
                <span class="mount">{{board.mount}}</span>
              </li>
            </ol>
          </div>
          <div class="board">
            <p class="title">
              稿件发布数排行
              <img src="../assets/img/data_title.png" alt="">
            </p>
            <ol class="boardData">
              <li v-for="(board, boardIndex) in boards" :key="boardIndex">
                <span>{{board.name}}</span>
                <span class="mount">{{board.mount}}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
import DoubleBar from '../components/DoubleBar'
import Time from '../components/Time'
import KLine from '../components/KLine'
import * as Apis from '../common/api'
import Common from '../common/common'
export default {
  name: 'summaryPage',
  components: {
    User,
    DoubleBar,
    KLine,
    Time
  },
  data() {
    return {
      yesterday: {
        pages: {
          wx: '...',
          wb: '...'
        },
        read: {
          wx: '...',
          wb: '...'
        },
        users: {
          wx: '...',
          wb: '...'
        }
      },
      all: {
        pages: {
          wx: '...',
          wb: '...'
        },
        read: {
          wx: '...',
          wb: '...'
        },
        users: {
          wx: '...',
          wb: '...'
        }
      },
      barTabs: [
        '发稿数', '阅读数', '关注人数'
      ],
      activeBar: '发稿数',
      kTabs: [
        '发稿数趋势', '阅读数趋势', '关注人数趋势'
      ],
      activeK: '发稿数趋势',
      boardTabs: [
        '微信排行', '微博排行'
      ],
      activeBoard: '微信排行',
      boards: [
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        },
        {
          name: '新闻坊',
          mount: '1.9万'
        }
      ]
    }
  },
  methods: {
    getBarRange(r) {
      this.getWXData(r)
    },
    getKRange(r) {
      this.getWXTrend(r)
    },
    getBoardRange(r) {
      this.getBoardData(r)
    },
    getTotalData() {
      Common.myFetch(Apis.S_Total_Data_DEV, Apis.S_Total_Data_Path)
      .then((data) => {
        if (data) {
          const yesterdayData = data.yesterdaydata;
          const allData = data.alldata;
          this.yesterday.pages.wx = yesterdayData.weixin.draft;
          this.yesterday.pages.wb = yesterdayData.weibo.draft || 0;
          this.yesterday.read.wx = yesterdayData.weixin.read;
          this.yesterday.read.wb = yesterdayData.weibo.read || 0;
          this.yesterday.users.wx = yesterdayData.weixin.new;
          this.yesterday.users.wb = yesterdayData.weibo.new || 0;
          this.all.pages.wx = allData.weixin.draft;
          this.all.pages.wb = allData.weibo.draft || 0;
          this.all.read.wx = allData.weixin.read;
          this.all.read.wb = allData.weibo.read || 0;
          this.all.users.wx = allData.weixin.all;
          this.all.users.wb = allData.weibo.all || 0;
        }
      })
    },
    getWXData(range) {
      Common.myFetch(Apis.S_WX_Data_DEV, Apis.S_WX_Data_Path, range)
      .then((data) => {
        console.log('wx data', data)
      })
    },
    getWXTrend(range) {
      Common.myFetch(Apis.S_WX_Trend_DEV, Apis.S_WX_Trend_Path, range)
      .then((data) => {
        console.log('wx trend', data)
      })
    },
    getBoardData(range) {
      Common.myFetch(Apis.S_WX_Board_DEV, Apis.S_WX_Board_Path, range)
      .then((data) => {
        console.log('wx board', data)
      })
    },
    toggleBar(bar) {
      this.activeBar = bar;
    },
    toggleK(k) {
      this.activeK = k;
    },
    toggleBoard(board) {
      this.activeBoard = board;
    },
    toggleRange(item, type) {
      const val = item.value;
      switch(type) {
        case 'bar':
        this.barRange = val;
        break;
        case 'k':
        this.kRange = val;
        break;
        case 'board':
        this.boardRange = val;
      }
    }
  },
  mounted() {
    this.getTotalData();
  }
}
</script>

<style lang="less" scoped src="../assets/css/summary.less"></style>
