<template>
  <div class="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style lang="less">
  // global css
  html, body {
    margin: 0;
    min-height: 100vh;
    min-height: 100%;
    font-family: '微软雅黑', sans-serif;
  }
  div {
    box-sizing: border-box;
  }
  .app {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    min-width: 100%;
    .nav {
      width: 240px;
      min-width: 140px;
      min-height: 100vh;
      min-height: 100%;
      background-color: #ddeefb;
    }
    .content {
      flex: 1;
    }
  }
</style>
