import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { store } from '@/store'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:3000'
});

app
.use(router)
.use(store)
.mount('#app');

