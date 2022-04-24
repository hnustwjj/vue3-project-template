import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/main'
import { createPinia } from 'pinia'
import 'normalize.css'
import './assets/css/index.css'
createApp(App).use(router).use(createPinia()).mount('#app')
