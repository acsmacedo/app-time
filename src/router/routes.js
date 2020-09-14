import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import('../components/timer/Timer.vue')
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: () => import('../components/stopwatch/Stopwatch.vue')
  },
  {
    path: '/date',
    name: 'Date',
    component: () => import('../components/date/Date.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'link-active'
})

export default router
