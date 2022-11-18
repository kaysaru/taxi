import App from './App.vue'
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from "./router/routes"
import {store} from "@/store/store";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from) => {
    if (to.name === 'Index' || to.name === 'Signup') return true
    if (
        // make sure the user is authenticated
        !store.getters.isLoggedIn &&
        // ❗️ Avoid an infinite redirect
        to.name !== 'Login'
    ) {
        // redirect the user to the login page
        return { name: 'Login' }
    }
})

const app = createApp(App);

app.use(router)
app.use(store)

app.mount('#app')
