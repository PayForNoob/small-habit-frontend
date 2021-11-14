import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import HabitToday from '../views/TodaysHabit.vue'
import axios  from 'axios'
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
    component: HabitToday
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  let res = null
  try {
    res = await axios.get('http://localhost:3000/auth') 
  } catch(err) {
    res = err.response
  }

  if(res.status < 400) {
    store.state.user = res.data
  } else {
    store.state.user = null
  }

  next()
})