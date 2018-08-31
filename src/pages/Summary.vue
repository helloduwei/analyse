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
      <div>
        <BarCharts />
      </div>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
import BarCharts from '../components/BarCharts'
export default {
  name: 'summaryPage',
  components: {
    User,
    BarCharts
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
      }
    }
  },
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
    }
  }
</style>
