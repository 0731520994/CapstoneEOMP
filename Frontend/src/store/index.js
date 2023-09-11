import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies'
import router from '@/router'
const capstoneeompUrl = "https://capstoneconnection.onrender.com"
const {cookies} = useCookies()

export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    product: null,
    adminData: [], 
    cart: [],
      total:0,
    newProduct: {
      prodID: '',
      prodName: '',
      categoryID: '',
      price: '',
      prodUrl: '',
    },
    orders: null,
    order: null,
    categories: null,

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
    getCartItemById: (state) => (productId) => {
      return state.cart.find((item) => item.prodID === productId);
    },
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
    setCategory(state, category) {
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
    setViewCart(state, ViewCart ) {
      state.ViewCart =ViewCart;
    },
      addProduct(state, newProduct) {
    state.products.push(newProduct);
  },
  addUserToAdmin(state, userData) {
    state.adminData.push(userData);
  },

  addToCart(state, product) {
  const existingCartItem = state.cart.find((item) => item.prodID === product.prodID);

  if (existingCartItem) {
    
    existingCartItem.quantity += 1;
  } else {
   
    state.cart.push({
      prodID: product.prodID,
      prodName: product.prodName,
      quantity: 1, 
    });
  }
},
removeFromCart(state, productId) {

  const index = state.cart.findIndex((item) => item.prodID === productId);
  if (index !== -1) {
    state.cart.splice(index, 1);
  }
},
clearCart(state) {

  state.cart = [];
},
},

  
  
  actions: {

    
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${capstoneeompUrl}/user`, payload)).data
          if (msg) {
            sweet({
              title: "Registration",
              text: msg,
              icon: "success",
              timer: 2000,
            });

            context.dispatch("fetchUsers"); 
            router.push({ name: "login" });
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 2000,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured, please try again");
        }
  },


async login(context, payload) {
  try {
    const { msg, token, result } = (await axios.post(`${apstoneeompUrl}login`, payload)).data
    if(result) {
      context.commit("setUser", {result, msg});
      cookies.set("LegitUser", {token, msg, result})
      AuthenticateUser.applyToken(token)
      sweet({
        title: msg,
        text: `Welcome back ${result?.firstName}`,
        icon: "success",
        timer: 2000
      })
      router.push({name: 'home'})
    } else {
      sweet({
        title: "Error",
        text: msg,
        icon: "error",
        timer: 2000
      })
    }
  } catch (e) {
    context.commit("setMsg", "An error has occurred")
  }
},



    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${capstoneeompUrl}/users`);
        context.commit('setUsers', data.results);
      } catch (e) {
        context.commit('setMsg', 'Error occurred while fetching users');
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


    async pushDataToAdmin({ commit }, userData) {
      commit('addUserToAdmin', userData);
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
        const response = await axios.post(`${capstoneeompUrl}/AddNewProduct`, payload);

        context.commit('addProduct', payload);
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

    async updateProduct(context, updatedProduct) {
      try {
       
        const response = await axios.patch(`${capstoneeompUrl}/products/${updatedProduct.prodID}`, updatedProduct);
    
    
        if (response.status === 200) {
          context.commit('setMsg', 'Product updated successfully');
        } else {
          context.commit('setMsg', 'Product update failed');
        }
    
        return response.data; 
      } catch (error) {
        console.error(error);
        context.commit('setMsg', 'An error occurred while updating the product');
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

    async fetchCartData(context, cartID) {
      try {
        const response = await axios.get(`/cart/${id}`); 
        const { data } = response;
        context.commit('setCart', data.results); 
      } catch (error) {
        console.error(error);
        context.commit('setMsg', 'Error fetching cart data'); 
      }
    },

  modules: {

  },
}
});
