import {createStore} from "vuex";

export const store = createStore({
    state () {
        return {
            count: 0,
            cart: [],
            brands: [],
            items: [],
            orders: []
        }
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        getCartItemById(state, i) {
            return state.cart[i];
        },

        getBrands(state) {
            return state.brands;
        },

        getItems(state) {
            return state.items;
        },
        getItemById(state, i) {
            return state.items[i];
        },
        getOrders(state) {
            return state.orders;
        },
        getOrderById(state, i) {
            return state.orders[i];
        }
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item);
        },
        removeFromCart(state, item) {
            for(let i = 0; i < state.cart.length; ++i)
                if(item.id === state.cart[i].id)
                    state.cart.splice(i, 1);
        },
        addToOrders(state, item) {
            state.orders.push(item);
        },
        removeFromOrders(state, item) {
            for(let i = 0; i < state.orders.length; ++i)
                if(item.id === state.orders[i].id)
                    state.orders.splice(i, 1);
        },
        setItems(state, items) {
            state.items = items;
        },
        addItem(state, item) {
            state.items.push(item);
        },
        setBrands(state, brands) {
            state.brands = brands;
        },
        addBrand(state, brand) {
            state.brands.push(brand);
        }
    }
})
