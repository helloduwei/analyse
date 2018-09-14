// 路由配置
import Summary from '../pages/Summary.vue'
import DataSummary from '../pages/DataSummary.vue'
import DataDetail from '../pages/DataDetail.vue'
import PageSummary from '../pages/PageSummary.vue'
import WxPage from '../pages/WxPage.vue'
import WxDetail from '../pages/WxDetail.vue'

export default {
  pages: [
    {
      path: '/',
      component: Summary
    },
    {
      path: '/summary',
      component: Summary
    },
    {
      path: '/data-summary',
      component: DataSummary
    },
    {
      path: '/data-detail',
      component: DataDetail
    },
    {
      path: '/page-summary',
      component: PageSummary
    },
    {
      path: '/wx-page',
      component: WxPage
    },
    {
      path: '/wx-detail',
      component: WxDetail
    }
  ]
}