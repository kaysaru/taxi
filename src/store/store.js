import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            orders: []
        }
    },
    getters: {
        getOrders(state) {
            return state.orders;
        },
        getOrderById(state, i) {
            return state.orders[i];
        }
    },
    mutations: {
        addToOrders(state, item) {
            state.orders.push(item);
        },
        removeFromOrders(state, item) {
            for (let i = 0; i < state.orders.length; ++i)
                if (item.id === state.orders[i].id)
                    state.orders.splice(i, 1);
        }
    }
})
