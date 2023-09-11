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

      <button @click="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prodID: "",
      prodName: "",
      categoryID: "",
      price: "",
      prodUrl: "",
      err: [], // Initialize an error array
    };
  },
  methods: {
    async addProduct() {
      // Validate the fields
      if (!this.prodName || !this.categoryID || !this.price || !this.prodUrl) {
        this.err = ["Please fill in all fields"];
        return; // Stop execution if there are validation errors
      }

      try {
        const payload = {
          prodID: this.prodID,
          prodName: this.prodName,
          categoryID: this.categoryID,
          price: this.price,
          prodUrl: this.prodUrl,
        };

        const response = await axios.post("https://capstoneconnection.onrender.com/AddNewProduct", payload);

      
        if (response.data) {
         
          this.prodID = "";
          this.prodName = "";
          this.categoryID = "";
          this.price = "";
          this.prodUrl = "";
          this.err = [];

          this.$router.push("/admin");
          alert("Product added successfully");
        } else {
         
          this.err = ["An error occurred"];
        }
      } catch (err) {
       
        this.err = [err.response?.data?.msg || "An error occurred"];
        console.error(err);
      }
    },
  },
};
</script>
