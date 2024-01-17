// import './assets/main.css'
import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import dotenv from 'dotenv';
import router from './router'

dotenv.config();

createApp(App).use(router).mount('#app')
