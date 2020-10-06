import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './components/About.vue'
import NotFound from './components/NotFound.vue'
import TempComponent from './components/TempComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TempComponent
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
