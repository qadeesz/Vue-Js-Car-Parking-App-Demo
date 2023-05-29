import "@/bootstrap.js";



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ValidationError from "@/components/ValidationError.vue";


import './assets/main.css'

const app = createApp(App)
app.component("ValidationError", ValidationError);
app.use(createPinia())
app.use(router)

app.mount('#app')
