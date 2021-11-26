import { createWebHistory, createRouter } from 'vue-router'
import LoadingPage from '../views/LoadingPage.vue'
import MainPage from '../views/MainPage.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import TotalHabit from '../views/TotalHabit.vue'
import TodaysHabit from '../views/TodaysHabit.vue'
import MyPage from '../views/MyPage.vue'
import EditHabit from '../views/EditHabit.vue'
import axios from 'axios'
import { store } from '../store/index.js'


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
    path: '/total',
    component: TotalHabit
  },
  {
    path: '/today',
    component: TodaysHabit
  },
  {
    path: '/mypage',
    component: MyPage
  },
  {
    path: '/edit/:id',
    component: EditHabit,
    props: true
  },
  {
    path: '/loading',
    component: LoadingPage
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