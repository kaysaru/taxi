import Index from "@/components/Index.vue";
import Order from "@/pages/Order";
import OrdersPage from "@/pages/OrdersPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";


export const routes = [
    {
        name: 'Index',
        path: '/',
        component: Index
    },
    {
        name: 'Map',
        path: '/map',
        component: Order
    },
    {
        name: 'Orders',
        path: '/orders',
        component: OrdersPage
    },
    {
        name: 'Login',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'Signup',
        path: '/signup',
        component: SignupPage
    }
]
