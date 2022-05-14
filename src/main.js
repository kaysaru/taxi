import App from './App.vue'
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from "./router/routes"
import {store} from "@/store/store";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

app.use(router)
app.use(store)

app.mount('#app')
