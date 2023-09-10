import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert2'; 
import cookies from 'js-cookie'; 

const capstoneeompUrl = "https://capstoneconnection.onrender.com"

export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    product: null,
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
    setAddToCart(state, product) {
      if (!state.cart) {
        state.cart = [];
      }
      state.cart.push(product);
    },
      addProduct(state, newProduct) {
    state.products.push(newProduct);
  },

  },
  
  actions: {


    async register(context, payload) {
      try {
        const {msg}  = (await axios.post (`${capstoneeompUrl}user`, payload)).data
          if (msg) {
            sweet({
              title: "Registering",
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
    const { msg, token, result } = (await axios.post(`${caps}login`, payload)).data
    if(result) {
      context.commit("setUser", {result, msg});
      cookies.set("LegitUser", {token, msg, result})
      authUser.applyToken(token)
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
        // Make sure to use the correct URL for updating a product
        const response = await axios.patch(`${capstoneeompUrl}/products/${updatedProduct.productID}`, updatedProduct);
    
        // Check if the update was successful
        if (response.status === 200) {
          context.commit('setMsg', 'Product updated successfully');
        } else {
          context.commit('setMsg', 'Product update failed');
        }
    
        return response.data; // You can return data if needed
      } catch (error) {
        console.error(error);
        context.commit('setMsg', 'An error occurred while updating the product');
        throw error; // Rethrow the error for further handling, if necessary
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
    
    addToCart(product) {
      axios.post('http://your-api-url/cart/add', { product }).then((response) => {
        this.$store.commit('addToCart', product);
    
      }
      )
    },
    

    removeFromCart(productId) {
      axios.delete(`http://your-api-url/cart/remove/${productId}`).then(() => {
        this.$store.commit('removeFromCart', productId);
      });
    },

  

  modules: {

  },
}},
)

