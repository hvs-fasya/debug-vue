import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wort from '@/components/Wort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wort',
      name: 'Wort',
      component: Wort
    }
  ]
})
