<template>
  <div class="content">
    <User />
    <div class="main">
      <table>
        <thead cellspacing="2">
          <th v-for="(title, titleIndex) in titles" :key="titleIndex" @click="reOrder(title)">
            <span>{{title.name}}</span>
            <img v-if="title.order" :src="title.desc?th_u:th_d" alt="图表">
          </th>
        </thead>
        <tbody>
          <tr class="line">
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr v-for="(item, index) in list" :key="index">
            <td class="title">{{item.department}}</td>
            <td class="title">
              <img src="../assets/img/avatar.png" alt="">
              <span class="wx">{{item.weixin}}</span>
            </td>
            <td>{{item.follows}}</td>
            <td>{{item.pages}}</td>
            <td>{{item.read}}</td>
            <td>{{item.aveRead}}</td>
            <td>{{item.forward}}</td>
            <td>{{item.collect}}</td>
            <td>{{item.collect}}</td>
            <td>{{item.usage}}</td>
            <td>
              <router-link :to="{path: 'wx-detail', query: {id: item.id}}">
                <a>查看详情</a>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
const th_u = require('../assets/img/th_u.png')
export default {
  name: 'dataDetailPage',
  components: {
    User
  },
  data() {
    return {
      th_u: require('../assets/img/th_u.png'),
      th_d: require('../assets/img/th_d.png'),
      titles: [
        {name: '频道部门', desc: false, order: true},
        {name: '微信号', desc: false, order: false},
        {name: '粉丝总数', desc: false, order: true},
        {name: '发布图文/稿件数', desc: false, order: true},
        {name: '总阅读数', desc: false, order: true},
        {name: '平均阅读数', desc: false, order: true},
        {name: '总转发数', desc: false, order: true},
        {name: '总转发数', desc: false, order: true},
        {name: '总收藏数', desc: false, order: true},
        {name: '平台使用率', desc: false, order: true},
        {name: '操作', desc: false, order: false}
      ],
      list : [
        {
          id: 12,
          department: '899驾车调频',
          weixin: '899驾车调频899驾车调频',
          follows: 10,
          pages: 200,
          read: 10,
          aveRead: 20,
          forward: 34,
          collect: 37,
          usage: 89
        },
        {
          id: 12,
          department: '899驾车调频',
          weixin: '899驾车调频',
          follows: 10,
          pages: 200,
          read: 10,
          aveRead: 20,
          forward: 34,
          collect: 37,
          usage: 89
        }
      ]
    }
  },
  methods: {
    reOrder(item) {
      // this.titles.forEach((title) => {
      //   title.desc = true
      // })
      if (!item.order) {
        return
      }

      item.desc = !item.desc
    }
  }
}
</script>

<style lang="less" scoped src="../assets/css/dataDetail.less"></style>
