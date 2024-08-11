<template>
  <div>
    <div class="edit-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

      <form @submit.prevent="updateProduct" class="edit-form">
        <div class="form-group">
          <label for="productID">Product ID</label>
          <input type="number" id="productID" placeholder="Enter product ID" v-model="product.prodID" />
        </div>
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input type="text" id="productName" placeholder="Enter product name" v-model="product.prodName" />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" placeholder="Enter the price" v-model="product.price" />
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input type="text" id="category" placeholder="Bea(1), Per(2), acce(3)" v-model="product.category" />
        </div>
        <div class="form-group">
          <label for="productLink">Product Link</label>
          <input type="text" id="productLink" placeholder="Enter the product link" v-model="product.prodUrl" />
        </div>

        <button type="submit" class="btn-submit">Submit</button>
      </form>
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

  created() {
    this.$store.dispatch('fetchProduct', this.$route.params.id);
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

<style scoped>
.edit-container {
  width: 60%;
  margin: 3rem auto;
  padding: 3rem;
  background-color: rgb(238, 216, 248);

  color: rgba(0, 0, 0, 0.5);
  border: 0.5px solid rgb(151, 150, 150);
 
}

.edit-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-submit {
  margin: auto;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: 2px solid purple;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  width: 10rem;

}

.btn-submit:hover {
  background-color: rgb(238, 216, 248);
  color: purple;
}
</style>
