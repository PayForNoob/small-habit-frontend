import { createApp } from 'vue'
import App from './App.vue'
import HabitHeader from './components/HabitHeader.vue'
import { router } from '@/router'
import { store } from '@/store/index.js'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.axios = axios.create();


app.use(router)
app.use(store)
app.component('habit-header', HabitHeader)
app.mount('#app');
