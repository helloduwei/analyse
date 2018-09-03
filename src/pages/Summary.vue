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
        <div class="conditions">
          <div :class="{range: true, active: bar.value === barRange}" v-for="(bar, barIndex) in ranges" :key="barIndex" @click="toggleRange(bar, 'bar')">
            {{bar.value}}
          </div>
        </div>
        <DoubleBar />
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(k, kIndex) in kTabs" :key="kIndex" :class="{tab: true, active: k === activeK}" @click="toggleK(k)">
            {{k}}
          </div>
        </div>
        <div class="conditions">
          <div :class="{range: true, active: k.value === kRange}" v-for="(k, kIndex) in ranges" :key="kIndex" @click="toggleRange(k, 'k')">
            {{k.value}}
          </div>
        </div>
        <KLine />
      </div>
      <div class="chartSection">
        <div class="title">
          <div v-for="(board, boardIndex) in boardTabs" :key="boardIndex" :class="{tab: true, active: board === activeBoard}" @click="toggleBoard(board)">
            {{board}}
          </div>
        </div>
        <div class="conditions">
          <div :class="{range: true, active: board.value === boardRange}" v-for="(board, boardIndex) in ranges" :key="boardIndex" @click="toggleRange(board, 'board')">
            {{board.value}}
          </div>
        </div>
        <div class="boards">
          <div class="board">
            <p class="title">
              稿件发布数排行
              <img src="../assets/img/data_title.png" alt="">
            </p>
            <ol class="boardData">
              <li v-for="(board, boardIndex) in boards" :key="boardIndex">
                {{board.name}}
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
import KLine from '../components/KLine'
export default {
  name: 'summaryPage',
  components: {
    User,
    DoubleBar,
    KLine
  },
  data() {
    return {
      yesterday: {
        pages: {
          wx: 1231,
          wb: 2223
        },
        read: {
          wx: 1233,
          wb: 678
        },
        users: {
          wx: 789,
          wb: 456
        }
      },
      all: {
        pages: {
          wx: 6789,
          wb: 5678
        },
        read: {
          wx: 45677,
          wb: 34567
        },
        users: {
          wx: 3456789,
          wb: 3459876
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
      ranges: [
        {
          value: '最近7天'
        },
        {
          value: '最近30天'
        },
        {
          value: '2018-07-01至2018-07-05'
        }
      ],
      barRange: '最近7天',
      kRange: '最近30天',
      boardRange: '2018-07-01至2018-07-05',
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
  }
}
</script>

<style lang="less" scoped>
  .content {
    .user {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #b1dbf9;
    }
    .main {
      padding: 26px 20px;
      min-height: 100vh;
      min-height: 100%;
      .summaryLine {
        display: flex;
        flex-direction: row;
        .dataSummary {
          flex: 1;
          margin: 0 50px 0 0;
          .title {
            height: 34px;
            line-height: 34px;
            font-size: 18px;
            color: #52687a;
            img {
              margin: 0 0 0 -10px;
              vertical-align: middle;
            }
          }
          .row {
            display: flex;
            height: 62px;
            line-height: 62px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .head {
              width: 120px;
              color: #52687a;
              font-size: 16px;
            }
            .number {
              width: 80px;
              text-align: left;
              font-size: 18px;
              color: #0091f2;
            }
            img {
              vertical-align: middle;
            }
          }
          .dotLine {
            border-bottom: 1px dotted #c4c4c4;
          }
        }
        .dataSummary:last-child {
          margin: 0;
        }
      }
      .chartSection {
        width: 100%;
        .title {
          height: 60px;
          background-color: #f5f5f5;
          .tab {
            display: inline-block;
            height: 60px;
            line-height: 60px;
            padding: 0 20px;
            border-bottom: 2px solid transparent;
            cursor: pointer;
          }
          .active {
            border-color: #1292ef;
            color: #1292ef;
          }
        }
        .conditions {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          .range {
            display: inline-block;
            margin: 0 0 0 10px;
            border-radius: 4px;
            height: 30px;
            width: auto;
            padding: 0 10px;
            line-height: 30px;
            font-size: 14px;
            color: #154972;
            background-color: #ddeefb;
            cursor: pointer;
          }
          .active {
            color: #0091f2;
            background-color: #c5e5fa;
          }
        }
        .boards {
          .board {
            .title {
              height: 34px;
              line-height: 34px;
              font-size: 18px;
              color: #52687a;
              background-color: transparent;
              img {
                margin: 0 0 0 -10px;
                vertical-align: middle;
              }
            }
          }
          .boardData {
            // tobe donw
            color: #52687a;
            li {
              height: 34px;
              line-height: 34px;
              border-top: 1px solid #ebf1f6;
              display: flex;
            }
            li:nth-child(even) {
              background-color: #fcf8f5;
            }
          }
        }
      }
    }
  }
</style>
