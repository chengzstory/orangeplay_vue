import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import home from '@/components/home'
import nav from '@/components/nav'
import tabItem from '@/components/tabItem'
import swiper from '@/components/customSwiper'
import gameInfo from '@/components/gameInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/register', component: register},
    {path: '/login', component: login},
    {path: '/home', component : home,
      children : [
        {path : '/home/popularGames', component: tabItem},
        {path : '/home/toOnlineGames', component: tabItem},
      ]},
    {
      path: '/nav', component : nav,
    },
    {path: '/', redirect: '/gameInfo'},
    {path: '/swiper', component: swiper},
    {path: '/gameInfo', component: gameInfo}
  ]
})
