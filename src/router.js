import { createWebHistory, createRouter} from 'vue-router'
import Main from './components/Main.vue'
import KakaoLogin from './components/KakaoLogin.vue'
import TodaysObjective from './components/TodaysObjective';


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
    path: '/objective/today',
    component: TodaysObjective
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})