import Index from "@/components/Index.vue";
import Order from "@/pages/Order";
import OrdersPage from "@/pages/OrdersPage";

export const routes = [
    {path: '/', component: Index},
    {path: '/map', component: Order},
    {path: '/orders', component: OrdersPage}
]
