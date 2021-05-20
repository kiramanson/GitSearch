import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import SearchResult from '@/components/SearchResult/SearchResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search-result',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
