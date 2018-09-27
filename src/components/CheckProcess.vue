<template>
  <div :class="{process: true, uncheckedSent: status === 1, checkedUnsent: status === 2, checkedSent: status === 3}">
    <img :src="icon" alt="审核图标">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'CheckProcess',
  props: {
    status: Number
  },
  data() {
    return {
      title: '审核状态',
      checkedSent: require('../assets/img/checkedSent.png'),
      uncheckedSent: require('../assets/img/uncheckedSent.png'),
      checkedUnsent: require('../assets/img/checkedUnsent.png'),
      icon: ''
    }
  },
  methods: {
    init() {
      switch (this.status) {
        case 1:
        this.title = '未审已发';
        this.icon = this.uncheckedSent;
        break;
        case 2:
        this.title = '已审未发';
        this.icon = this.checkedUnsent;
        break;
        case 3:
        this.title = '已审已发';
        this.icon = this.checkedSent
        break;
        default:
        this.title = '审核状态';
        this.icon = this.uncheckedSent
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="less" scoped>
.process {
  height: 26px;
  line-height: 26px;
  font-size: 14px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 20px;
  display: inline-block;
  padding: 0 10px;
  img {
    vertical-align: sub;
    margin-right: 4px;
  }
}
.uncheckedSent {
  border-color: #e66360;
  color: #e66360;
}
.checkedUnsent {
  border-color: #f7b041;
  color: #f7b041;
}
.checkedSent {
  border-color: #2bc942;
  color: #2bc942;
}
</style>
