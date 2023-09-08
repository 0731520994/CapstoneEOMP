import { createStore } from 'vuex';
import axios from 'axios';
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
import authenticateUser from '@/services/authenticateuser';
const capstoneeompUrl = "https://capstoneconnection.onrender.com"

const { cookies } = useCookies()
export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    product: null,
    orders: null,
    order: null,
    categories: null,
    addToCart: [],
    ViewItem: null,
    category: null,
    spinner: false,
    token: null,
    msg: null,
    state: {
      product: {
        prodUrl: '',
      },
    },
  },
  getters: {

  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setOrders(state, orders){
      state.orders = orders;
    },
    setOrder(state, order){
      state.order = order;
    },
    setCategories(state, categories){
      state.categories = categories;
    },
    setCategory(state, setCategory){
      state.category = category;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.spinner = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setViewItem(state, ViewItem) {
      state.ViewItem = ViewItem;
    },
    setAddToCart(state, product) {
      if (!state.cart) {
        state.cart = [];
      }
      state.cart.push(product);
    },
  },
  
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${capstoneeompUrl}/users`);
        context.commit('setUsers', data.results);
      } catch (e) {
        context.commit('setMsg', 'error occured');
      }
    },
    async updateUser(context, updatedUser) {
      try {
        const response = await axios.patch(
          `${cUrl}users/${updatedUser.userID}`,
          updatedUser
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    async getUser(context) {
      try {
        const response = await axios.get(`${cUrl}users`);
        context.commit('setUsers', response.data.results);
        context.commit('setSpinner', false);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${capstoneeompUrl}/products`); 
        context.commit('setProducts', data.results);
      } catch (err) {
        console.log(err);
        context.commit('setMsg', 'error occurred');
      }
    },
    async fetchProduct(context, id) {
      try {
        const response = await axios.get(`${cUrl}product/${id}`);
        const { results, err } = response.data;
        if (results) {
          context.commit('setProduct', results[0]);
        } else {
          context.commit('setMsg', err);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async addProduct(context, payload) {
      try {
        const response = await axios.post(`${cUrl}products`, payload);
        const { msg, err } = response.data;

        if (msg) {
          context.commit('setMsg', msg);
        } else if (err) {
          console.log(err);
          context.commit('setMsg', err);
        }

        await context.dispatch('fetchProducts');
      } catch (error) {
        console.error(error);
        context.commit('setMsg', 'Error adding product');
        throw error;
      }
    },
    async fetchProductsByCategory(context, categoryName) {
      try {
        const { data } = await axios.get(`${capstoneeompUrl}/products/category/${categoryName}`);
        context.commit('setProducts', data.results);
      } catch (err) {
        console.log(err);
        context.commit('setMsg', 'Error occurred while fetching products by category');
      }
    }, 
    // Register user
    async register(context, info) {
      try {
        const { msg } = (await axios.post(`${capstoneeompUrl}register`, info)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" }); //destination after registered
        } else {
          sweet({
            title: "error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    // login user
    async login(context, info) {
      try {
        const { msg, token, result } = (
          await axios.post(`${capstoneeompUrl}login`, info)
        ).data;
        // console.log( msg, token, result);
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("cookie_use", { msg, token, result });
          authenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "checkout" }); //page i want to go after
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    // log out
    async logOut(context) {
      context.commit("setUser")
      cookies.remove("cookie_use")
  },
    



  },

  modules: {

  },
});
