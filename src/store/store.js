import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            orders: [],
            loggedIn: false,
            user: null
        }
    },
    getters: {
        getOrders(state) {
            return state.orders;
        },
        getOrderById(state, i) {
            return state.orders[i];
        },
        isLoggedIn(state) {
            return state.loggedIn;
        },
        getUser(state) {
            return state.user;
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
        },
        setLoggedIn(state, flag) {
            state.loggedIn = flag;
        },
        setUser(state, user) {
            state.user = user;
        }
    }
})
