import { createWebHistory, createRouter} from 'vue-router'
import Main from './views/MainPage.vue'
import KakaoLogin from './views/KakaoLogin.vue'
import HabitToday from './views/TodaysHabit.vue';

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