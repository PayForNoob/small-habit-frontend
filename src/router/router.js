import { createWebHistory, createRouter } from 'vue-router'
import Main from '../views/Main.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import HabitToday from '../views/HabitToday';


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: Main
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