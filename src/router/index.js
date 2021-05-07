import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/components/PageMain'
import PageNewTab from '@/components/PageNewTab'
import TimeDeal from '@/components/TimeDeal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: PageMain
    },
    {
      path: '/newpage',
      name: 'PageNewTab',
      component: PageNewTab
    }, {
      path: '/timedeal',
      name: 'Timedeal',
      component: TimeDeal
    },
  ]
})
