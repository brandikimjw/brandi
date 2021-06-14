import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/components/main/PageMain'
import PageNewTab from '@/components/new/PageNewTab'
import TimeDeal from '@/components/main/TimeDeal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageMain,
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
