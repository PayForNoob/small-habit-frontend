import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import LoginMiddle from '../components/LoginMiddle.vue'
import HabitToday from '../views/TodaysHabit.vue';


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
    path: '/login/middle',
    component: LoginMiddle
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