import { createWebHistory, createRouter} from 'vue-router'
import Main from './views/Main.vue'
import KakaoLogin from './views/KakaoLogin.vue'


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
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})