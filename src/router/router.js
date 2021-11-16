
import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import TotalHabit from '../views/TotalHabit.vue'
import TodaysHabit from '../views/TodaysHabit.vue'



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
    path: '/habit/total',
    component: TotalHabit
  },
  {
    path: '/habit/today',
    component: TodaysHabit

  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})