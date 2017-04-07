import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Player from '@/components/Player'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
