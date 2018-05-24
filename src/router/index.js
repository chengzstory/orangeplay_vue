import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '@/components/register'
import home from '@/components/home'
import nav from '@/components/nav'
import tabItem1 from '@/components/popularTabItem'
import tabItem2 from '@/components/toOnlineTabltem'
import homeBanner from '@/components/banner/homeBanner'
import gameInfo from '@/components/gameInfo/gameInfo'
import gameBanner from '@/components/banner/gameBanner'
import search from '@/components/search'
import email from '@/components/email'
import countdown from '@/components/countdown'
import freeBanner from '@/components/banner/freeBanner'
import gameCap from '@/components/gameCap'
import tagGames from '@/components/tagGames'
import tagBanner from '@/components/banner/tagBanner'
import searchPop from '@/components/search/autoSearch'
import cart from '@/components/cart'
import order from '@/components/order'
import userinfo from '@/components/userinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/register', component: register},
    {path: '/login', component: login},
    {path: '/home', component : home,
      children : [
        {path : '/home/popularGames', component: tabItem1},
        {path : '/home/toOnlineGames', component: tabItem2},
      ]
    },
    {
      path: '/nav', component : nav,
    },
    {path: '/', redirect: '/home'},
    {path: '/pop', component: searchPop},
    {path: '/cap', component: gameCap},
    {path: '/tagGames/:tag', component: tagGames},
    {path: '/tagBanner', component: tagBanner},
    {path: '/freeBanner', component: freeBanner},
    {path: '/homeBanner', component: homeBanner},
    {path: '/gameInfo/:gameId', component: gameInfo},
    {path: '/gameBanner', component: gameBanner},
    {path: '/search/:keyword', component:search},
    {path: '/email', component:email},
    {path: '/countdown', component:countdown},
    {path: '/cart', component:cart},
    {path: '/order', component:order},
    {path: '/userinfo', component:userinfo},
  ]
})
