import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import TodaysHabit from '../views/TodaysHabit.vue'
import EditHabit from '../views/EditHabit.vue'
import axios from 'axios'
import { store } from '../store'


const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: MainPage
  },
  {
    path: '/login',
    component: KakaoLogin
  },
  {
    path: '/today',
    component: TodaysHabit
  },
  {
    path: '/edit',
    component: EditHabit
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
    store.state.user = res.data
  } else {
    store.state.user = null
  }

  next()
})