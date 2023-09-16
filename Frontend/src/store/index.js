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
    product: null,
    adminData: [],
    cart: [],
    newProduct: {
    prodID: '',
    prodName: '',
    category: '',
    price: '',
    prodUrl: '',
    orders: null,
    order: null,
    // cart: storedCart,
//     removeFromCart: null,
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
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCategory(state, category) {
      state.category = category;
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
    deleteProduct(state, prodID) {
      state.products = state.products.filter((product) => product.prodID !== proID);
    },
    deleteUser(state, userID) {
      state.users = state.users.filter((user) => user.userID !== userID);
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
    addToCart(state, product) {
      state.cart.push(product);
    },


  
  },
 
  actions: {

    
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${capstoneeompUrl}register`, payload)).data
          if (msg) {
            sweet({
              title: "Registration",
              text: msg,
              icon: "success",
              timer: 400,
            });

            context.dispatch("fetchUsers"); 
            router.push({ name: "login" });
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 400,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured, please try again");
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
        timer: 400
      })
      router.push({name: 'home'})
    } else {
      sweet({
        title: "Error",
        text: msg,
        icon: "error",
        timer: 400
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
          `${capstoneeompUrl}users/${updatedUser.userID}`,
          updatedUser
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },  

    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${capstoneeompUrl}addUser`, payload)).data;
        console.log(msg);
        if (msg) {
          context.dispatch("fetchProducts");
          sweet({
            title: "Success",
            text: msg,
            icon: "success",
            timer: 2000
          });
          router.push({ name: 'all' });
        } else {
          sweet({
            title: "Error",
            text: "An error occurred",
            icon: "error",
            timer: 2000
          });
        }
      } catch (error) {
        sweet({
          title: "Error",
          text: "Please contact the admin",
          icon: "error",
          timer: 2000
        });
      }
    },


    async deleteUsers(context, id) {
      try {
        const { data } = await axios.delete(`${capstoneeompUrl}user/${id}`);
        context.commit("deleteUser", userID);
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
          sweet({
            title: "Deleted",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
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
        const response = await axios.get(`${capstoneeompUrl}product/${id}`);
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

    async updateProduct(context, updatedProduct) {
      try {
       
        const response = await axios.patch(`${capstoneeompUrl}products/${updatedProduct.productID}`, updatedProduct);
    
    
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

         
    async deleteProduct(context, prodID) {
      const result = await swal({
        title: 'Confirmation',
        text: 'Are you sure you want to delete?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      });
    
      if (result) {
        axios
          .delete(`${capstoneeompUrl}product/${prodID}`)
          .then((res) => {
            swal('Deleted', 'Product has been deleted!', 'success');
            window.location.reload();
          })
          .catch((error) => {
            swal('Error!', 'An error occurred while deleting the product.', 'error');
          });
      }
    },
    


    async fetchProductsByCategory(context, categoryName) {
      try {
        const { data } = await axios.get(`${capstoneeompUrl}products/category/${categoryName}`);
        context.commit('setProducts', data.results);
      } catch (err) {
        console.log(err);
        context.commit('setMsg', 'Error occurred while fetching products by category');
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

    async deleteUser(context, userID){
      try {
        const response = await axios.delete(`${capstoneeompUrl}user/${userID}`)
        context.commit('setDelete', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },

  },

  modules: {

  },
},


);
