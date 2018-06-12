import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import transfer from '@/components/transfer'
import index from '@/components/index'
import userinfo from '@/components/userinfo'
import admini from '@/components/admini'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/admini',
      name: 'admini',
      component: admini
    }
  ]
})
