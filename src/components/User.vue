<template>
  <div class="user">
    <div class="avatar">
      <img src="../assets/img/avatar.png" alt="avatar">
    </div>
    <div class="info">
      <div class="name">
        {{user.name}}
      </div>
      <div class="role">
        {{user.role}}
      </div>
    </div>
    <div class="arrow">
      <img src="../assets/img/arrow.png" alt="arrow">
    </div>
    <div class="help">
      <img src="../assets/img/help.png" alt="help">
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    // user
  },
  data() {
    return {
      user: {
        name: '水落清流浅浅',
        role: 'iHub·运营'
      }
    }
  },
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1px solid #eaeaea;
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin: 3px;
      display: block;
    }
  }
  .info {
    font-size: 14px;
    margin: 0 8px;
    cursor: pointer;
    .name {
      color: #222;
    }
    .role {
      color: #888;
    }
  }
  .arrow {
    cursor: pointer;
    width: 24px;
    height: 16px;
    border-right: 1px solid #eaeaea;
  }
  .help {
    margin: 0 24px 0 12px;
    cursor: pointer;
  }
}
</style>
