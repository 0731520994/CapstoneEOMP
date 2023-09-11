<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

      <label>ID</label>
      <input type="number" placeholder="Enter productID" v-model="prodID" />

      <label>Name</label>
      <input type="text" placeholder="Enter product name" v-model="prodName" />

      <label>categoryID</label>
      <input type="text" placeholder="Bea(1), Per(2), acce(3)" v-model="categoryID" />

      <label>Price</label>
      <input type="number" placeholder="Enter the price" v-model="price" />

      <label>Image</label>
      <input type="text" placeholder="Enter the product link" v-model="prodUrl" />

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
        categoryID: "",
        price: "",
        prodUrl: "",
        prodName: "",
      },
    };
  },

  mounted() {
   

    this.getProductData();
  },

  methods: {
    getProductData() {
      axios.get('https://capstoneconnection.onrender.com/product/{id}')
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
      axios.post("https://capstoneconnection.onrender.com/product/{id}", this.product)
        .then(res => {
          console.log(res.data.msg);
          this.err = []; 
        })
        .catch(err => {
          this.err = [err.response?.data?.msg || "An error occurred"];
          console.error(err);
        });
    },
  },
};
</script>
