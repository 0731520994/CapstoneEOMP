<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

      <input type="number" placeholder="Enter productID" v-model="product.prodID" />
      <input type="text" placeholder="Enter product name" v-model="product.prodName" />
      <input type="number" placeholder="Enter the price" v-model="product.price" />
      <input type="text" placeholder="Bea(1), Per(2), acce(3)" v-model="product.category" />
      <input type="text" placeholder="Enter the product link" v-model="product.prodUrl" />

      <button @click="updateProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'editProduct',
  data() {
    return {
      err: [], 
      product: {
        prodID: "",
        category: "",
        price: "",
        prodUrl: "",
        prodName: "",
      },
    };
  },

  created(){
       this.$store.dispatch('fetchProduct',
        this.$route.params.id)
    },
  mounted() {
   

    this.getProductData();
  },

  methods: {
    getProductData() {
  const productId = this.$route.params.id; // Get the product ID from the route parameter
  axios.get(`https://capstoneconnection.onrender.com/product/${productId}`)
    .then(res => {
      console.log(res.data.product);
      this.product = res.data.product;
    })
    .catch(err => {
      this.err = [err.response?.data?.msg || "An error occurred"];
      console.error(err);
    });
},

async updateProduct() {
  try {
    const productId = this.$route.params.id; 
    const response = await axios.put(`https://capstoneconnection.onrender.com/product/${productId}`, this.product);
    console.log(response.data.msg);
    this.err = [];
  } catch (err) {
    this.err = [err.response?.data?.msg || "An error occurred"];
    console.error(err);
  }
},

  },
};
</script>
