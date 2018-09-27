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
      </div>
      <table v-if="activeBar === '稿件数据'">
        <thead cellspacing="2">
          <th v-for="(title, titleIndex) in titles" :key="titleIndex" @click="reOrder(title)">
            <span>{{title.name}}</span>
            <img v-if="title.order" :src="title.desc?th_u:th_d" alt="图表">
          </th>
        </thead>
        <tbody>
          <tr class="line">
            <td v-for="(line, lineIndex) in titles" :key="lineIndex"></td>
          </tr>
          <tr v-for="(item, index) in list" :key="index">
            <td>
              <CheckProcess v-bind:status="item.status" />
            </td>
            <td>{{item.department}}</td>
            <td class="title">
              <img src="../assets/img/avatar.png" alt="">
              <span class="wx">{{item.weixin}}</span>
            </td>
            <td>
              <div class="pageTitle" v-for="(title, titleIndex) in item.title" :key="titleIndex">
                {{title}}
              </div>
            </td>
            <td>{{item.read}}</td>
            <td>{{item.forward}}</td>
            <td>{{item.collect}}</td>
            <td>{{item.date}}<br>{{item.time}}</td>
          </tr>
        </tbody>
      </table>
      <table v-if="activeBar === '稿件审核'">
        <thead cellspacing="2">
          <th v-for="(title, titleIndex) in checkTitles" :key="titleIndex" @click="reOrder(title)">
            <span>{{title.name}}</span>
            <img v-if="title.order" :src="title.desc?th_u:th_d" alt="图表">
          </th>
        </thead>
        <tbody>
          <tr class="line">
            <td v-for="(checkTitle, checkIndex) in checkTitles" :key="checkIndex"></td>
          </tr>
          <tr v-for="(item, index) in checks" :key="index">
            <td>
              <div :class="{pageProcess: true, toCheck: item.process === '待审核', processing: item.process === '三审通过' || item.process === '二审通过', publiced: item.process === '已发布'}">
                {{item.process}}
              </div>
            </td>
            <td>{{item.department}}</td>
            <td class="title">
              <img src="../assets/img/avatar.png" alt="">
              <span class="wx">{{item.weixin}}</span>
            </td>
            <td>
              <div class="pageTitle" v-for="(title, titleIndex) in item.title" :key="titleIndex">
                {{title}}
              </div>
            </td>
            <td>{{item.date}}<br>{{item.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
import CheckProcess from '../components/CheckProcess.vue'
export default {
  name: 'wxPagePage',
  components: {
    User,
    CheckProcess
  },
  data() {
    return {
      barTabs: [
        '稿件数据', '稿件审核'
      ],
      activeBar: '稿件数据',
      th_u: require('../assets/img/th_u.png'),
      th_d: require('../assets/img/th_d.png'),
      titles: [
        {name: '审核状态', desc: false, order: true},
        {name: '频道部门', desc: false, order: true},
        {name: '微信号', desc: false, order: false},
        {name: '稿件标题', desc: false, order: false},
        {name: '阅读数', desc: false, order: false},
        {name: '分享转发', desc: false, order: false},
        {name: '收藏数', desc: false, order: false},
        {name: '收藏数', desc: false, order: false}
      ],
      list : [
        {
          id: 12,
          status: 1,
          department: '899驾车调频',
          weixin: '899驾车调频899驾车调频',
          title: ['2024年中国或成为全球唯一有空间站的国家'],
          read: 10,
          forward: 34,
          collect: 37,
          date: '2018-09-01',
          time: '10:23'
        },
        {
          id: 10,
          status: 2,
          department: '899驾车调频',
          weixin: '899驾车调频899驾车调频',
          title: [
            '山西湖泊变鸳鸯: 半红半绿',
            '网易携163如何崛起',
            '福克斯电视台录制辱华节目'
          ],
          read: 10,
          forward: 30,
          collect: 27,
          date: '2018-09-02',
          time: '10:23'
        },
        {
          id: 10,
          status: 3,
          department: '899驾车调频',
          weixin: '899驾车调频899驾车调频',
          title: [
            '山西湖泊变鸳鸯: 半红半绿',
            '网易携163如何崛起',
            '福克斯电视台录制辱华节目'
          ],
          read: 10,
          forward: 30,
          collect: 27,
          date: '2018-09-02',
          time: '10:23'
        }
      ],
      checkTitles: [
        {name: '审核进度', desc: false, order: true},
        {name: '频道部门', desc: false, order: true},
        {name: '微信号', desc: false, order: false},
        {name: '稿件标题', desc: false, order: false},
        {name: '送审时间', desc: false, order: false}
      ],
      checks: [
        {
          process: '待审核',
          department: '经典947',
          weixin: '经典947',
          title: [
            '山西湖泊变鸳鸯: 半红半绿',
            '网易携163如何崛起',
            '福克斯电视台录制辱华节目'
          ],
          date: '2018-09-01',
          time: '10:23'
        },
        {
          process: '三审通过',
          department: 'SMG阳阳工作室',
          weixin: 'SMG阳阳工作室',
          title: [
            '山西湖泊变鸳鸯: 半红半绿'
          ],
          date: '2018-09-02',
          time: '02:23'
        },
        {
          process: '二审通过',
          department: 'SMG阳阳工作室',
          weixin: 'SMG阳阳工作室',
          title: [
            '山西湖泊变鸳鸯: 半红半绿'
          ],
          date: '2018-09-02',
          time: '02:23'
        },
        {
          process: '已发布',
          department: 'SMG阳阳工作室',
          weixin: 'SMG阳阳工作室',
          title: [
            '山西湖泊变鸳鸯: 半红半绿'
          ],
          date: '2018-09-02',
          time: '02:23'
        }
      ]
    }
  },
  methods: {
    toggleBar(bar) {
      this.activeBar = bar
    },
    reOrder(item) {
      if (!item.order) {
        return
      }

      item.desc = !item.desc
    }
  }
}
</script>

<style lang="less" scoped src="../assets/css/wxPage.less"></style>
