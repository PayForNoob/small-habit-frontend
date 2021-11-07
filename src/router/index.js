import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'habitToday',
  //   component: habitToday
  // },
  // {
  //   path: '/Total',
  //   name: 'Total',
  //   component: habitTotal
  // },
  // {
  //   path: '/edit/:id',
  //   name: 'edit',
  //   component: Post
  // },

]

const router = new VueRouter({
  mode: 'history',//# 써야하는거 지워짐
  base: process.env.BASE_URL,
  routes
})

export default router
