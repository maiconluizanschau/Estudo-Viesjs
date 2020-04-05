import Vue from 'vue'
import Router from 'vue-router'
import movies from './views/Movies.vue'
import HomePage from './views/HomePage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies
    }
  ]
})
