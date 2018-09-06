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
        <Time eleId="date1" v-on:fetchRange="getBarRange" />
      </div>
    </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
import Time from '../components/Time'
export default {
  name: 'pageSummaryPage',
  components: {
    User,
    Time
  },
  data() {
    return {
      barTabs: [
        '分享转发数', '微信收藏数', '微博评论数', '微博点赞数'
      ],
      activeBar: '分享转发数'
    }
  },
  methods: {
    toggleBar(bar) {
      this.activeBar = bar
    },
    getBarRange(r) {
      console.log(r)
    }
  }
}
</script>

<style lang="less" scoped src="../assets/css/pageSummary.less"></style>
