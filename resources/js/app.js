require("./bootstrap");

import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueRouter from "vue-router";
import axios from "axios";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: require("./routes"),
});

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        order: {},
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            let productIndex = state.cart.findIndex(
                (p) => p.slug === product.slug
            );
            if (productIndex === -1) {
                product.qty = 1;
                state.cart.push(product);
                return;
            } else {
                state.cart[productIndex].qty++;
                return;
            }
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
        },
    },
    actions: {
        getProducts({ commit }) {
            axios
                .get("/api/products")
                .then((response) => {
                    commit("updateProducts", response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clearCart({ commit }) {
            commit("updateCart", []);
        },
    },
});

const app = new Vue({
    router,
    store,
    el: "#app",
    created() {
        store
            .dispatch("getProducts")
            .then(() => {
                console.log("Fetched Products");
            })
            .catch((err) => {
                console.log(err);
            });
    },
});
