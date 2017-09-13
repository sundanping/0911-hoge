import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import joinUs from '@/components/joinUs'
import company from '@/components/company'
import customer from '@/components/customer'
import cooperation from '@/components/cooperation'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: index
    }, {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: joinUs
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    },
    {
      path: '/customer',
      name: 'customer',
      component: customer
    }
  ]
})
