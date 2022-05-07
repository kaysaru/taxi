import { createApp } from 'vue'
import { store } from "@/store/store";
import { routes } from "./router/routes"
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

app.use(router)
app.use(store)

app.mount('#app')






// Install the store instance as a plugin
