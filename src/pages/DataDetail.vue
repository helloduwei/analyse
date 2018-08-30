<template>
  <div class="content">
    <User />
    data-detail page
  </div>
</template>

<script>
import User from '../components/User.vue'
export default {
  name: 'dataDetailPage',
  components: {
    User
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
  }
</style>
