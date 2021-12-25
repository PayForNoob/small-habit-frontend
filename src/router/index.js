import { createWebHistory, createRouter } from 'vue-router'
import axios from 'axios'
import { store } from '../store/index.js'
const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
  },
  {
    path: '/total',
    component: () => import(/* webpackChunkName: "habit" */ '@/views/HabitInfo.vue')
  },
  {
    path: '/today',
    component: () => import(/* webpackChunkName: "habit" */ '@/views/HabitInfo.vue')
  },
  {
    path: '/myinfo',
    component: () => import(/* webpackChunkName: "myinfo" */ '@/views/MyInfo.vue')
  },
  {
    path: '/edit/:id',
    props: true,
    component: () => import(/* webpackChunkName: "habit" */ '@/views/HabitEdit.vue')
  },
  {
    path: '/create',
    component: () => import(/* webpackChunkName: "habit" */ '@/views/HabitSelectCategory.vue')
  },
  {
    path: '/create/:category',
    props: true,
    component: () => import(/* webpackChunkName: "habit" */ '@/views/HabitEdit.vue')
  },
  {
    path: '/loading',
    component: () => import(/* webpackChunkName: "loading" */ '@/views/Loading.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  let res = null
  try {
    res = await axios.get('/api/auth')
  } catch (err) {
    res = err.response
    console.log('err', err)
  }

  if (res.status < 400) {
    // console.log(res.data)
    store.state.user = res.data
  } else {
    store.state.user = null
  }

  next()
})