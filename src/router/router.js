import { createWebHistory, createRouter} from 'vue-router'
import MainPage from '../views/MainPage.vue'
import KakaoLogin from '../views/KakaoLogin.vue'


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
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})