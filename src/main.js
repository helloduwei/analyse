import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './common/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routesConfig = new VueRouter({
  mode: 'history',
  routes: routes.pages
})

new Vue({
  el: '#app',
  router: routesConfig,
  render: h => h(App)
})
