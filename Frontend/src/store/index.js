import { createStore } from 'vuex';
import axios from 'axios';

const capstoneeompUrl = "https://capstoneeomp-zsz7.onrender.com"

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
    



  },

  modules: {

  },
});
