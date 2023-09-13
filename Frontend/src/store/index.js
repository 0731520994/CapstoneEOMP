import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert';
import { useCookies } from 'vue3-cookies';
import router from '@/router';
const capstoneeompUrl = "https://capstoneconnection.onrender.com/";
const { cookies } = useCookies();
export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    addUsers: null, 
    product: null,
    updateProduct: null,
    newProduct: {
    prodID: '',
    prodName: '',
    category: '',
    price: '',
    prodUrl: '',
    updateUser: null,
    orders: null,
    order: null,
    removeFromCart: null,
    ViewItem: null,
    spinner: false,
    token: null,
    msg: null,
    accessories: null,
    perfumes: null,
    beauty: null,
    state: {
      product: {
        prodUrl: '',
      },
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
    addUsers(state, data) {
      state.addUsers = data
    },
    addUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setOrders(state, orders) {
      state.orders = orders;
    },
    setOrder(state, order) {
      state.order = order;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token; 
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setViewItem(state, ViewItem) {
      state.ViewItem = ViewItem;
    },
    setDeleteProduct(state, data) {
      state.products = data;
    },
    setDeleteUser(state, data) {
      state.users = data;
    },
    addToCart(state, product) {
       state.cart.push(product)
    },
    removeFromCart(state, productIndex) {
      state.cart.splice(productIndex, 1);
    },
    setPerfumes(state, perfumes) {
      state.perfumes = perfumes;
    },
    setAccessories(state, accessories) {
      state.accessories = accessories;
    },
    setBeauty(state, beauty) {
      state.beauty= beauty;
    },
    updateProducts(state, data) {
      state.updateProduct = data
    },
    updateUsers(state, data) {
      state.updatetUser = data
    },
  },

  actions: {
    
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${capstoneeompUrl}user`, payload)).data
          
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

  async addUser(context, userData){
    try {
      const response = await axios.post(`${capstoneeompUrl}user`, userData)
      context.commit('addUser', response.data)
      location.reload()
    } catch (error) {
      console.log(error);
    }
  },


  async editUser(context, addUser){
    try {
      console.log(addUser)
      const response = await axios.patch(`${capstoneeompUrl}user/${addUser.userID}`, addUser)
      context.commit('editUsers', response.data)
      location.reload()
    } catch (error) {
      console.log(error);
    }
  },



async login(context, payload) {
  try {
    const { msg, token, result } = (await axios.post(`${capstoneeompUrl}login`, payload)).data
    if(result) {
      context.commit("setUser", {result, msg});
      localStorage.setItem("user", JSON.stringify(result))
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
        const { data } = await axios.get(`${capstoneeompUrl}users`);
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
   
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${capstoneeompUrl}products`); 
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
        const {msg} = (await axios.post(`${capstoneeompUrl}AddNewProduct`, payload)).data;
        console.log(msg);
        if(msg) {
          context.dispatch("fetchProducts")
          sweet({
            title: "Success",
            text: msg,
            icon: "success",
            timer: 2000
          })
          router.push({name: 'all'})
        }else {
          sweet({
            title: "Error",
            text: "An error occurred",
            icon: "error",
            timer: 2000
          })
        }
      } catch (error) {
        sweet({
          title: "Error",
          text: "Please contact the admin",
          icon: "error",
          timer: 2000
        })
      }
    },
    async updateProduct(context, product) {
      try {
       
        const response = await axios.patch(`${capstoneeompUrl}products/${product.productID}`, product);
    
    
        if (response.status === 200) {
          context.commit('msg', 'Product updated successfully');
        } else {
          context.commit('msg', 'Product update failed');
        }
    
      } catch (error) {
        console.error(error);
        context.commit('msg', 'An error occurred while updating the product');
        throw error; 
      }
    },
    
    async deleteProduct(context, prodID){
      try {
        const response = await axios.delete(`${capstoneeompUrl}product/${prodID}`)
        context.commit('setDeleteProduct', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },

    async editProduct(context, product){
      try {
        const response = await axios.patch(`${capstoneeompUrl}product/${product.prodID}`, product)
        const updatedProduct = response.data;
        context.commit('setProduct', updatedProduct);
      } catch (error) {
        console.error(error);
        context.commit('msg', 'Failed to edit product.');
      }
    },
    

    async editUser(context, addUser){
      try {
        console.log(addUserdUser)
        const response = await axios.patch(`${capstoneeompUrl}user/${addUser.userID}`, addUser)
        context.commit('editUsers', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },



    async addToCartAction(context, product) {
      context.commit('addToCart', product);
      localStorage.setItem('cart', JSON.stringify(context.state.cart));
    },
    async removeFromCartAction(context, productIndex) {
      context.commit('removeFromCart', productIndex);
    },
    async fetchAccessories(context) {
      try{
        const {data} = await axios.get(`${capstoneeompUrl}accessories`)
        context.commit("setAccessories", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchBeauty(context) {
      try{
        const {data} = await axios.get(`${capstoneeompUrl}beauty`)
        context.commit("setBeauty", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchPerfumes(context) {
      try{
        const {data} = await axios.get(`${capstoneeompUrl}perfumes`)
        context.commit("setPerfumes", data.results)
      }catch(e){
        console.log(e)
      }
    },
  },

  modules: {
  },
}
);