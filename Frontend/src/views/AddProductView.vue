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

      <label>Category</label>
      <select v-model="category">
  <option value="Accessories">Accessories</option>
  <option value="Beauty">Beauty</option>
  <option value="Perfumes">Perfumes</option>
</select>


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
      category: "",
      price: "",
      prodUrl: "",
      err: [], 
      products: [],
    };
  },
  methods: {
    async addProduct() {
     
      if (!this.prodName || !this.category || !this.price || !this.prodUrl) {
        this.err = ["Please fill in all fields"];
        return; 
      }

      try {
        const payload = {
          prodID: this.prodID,
          prodName: this.prodName,
          categoryID: this.category,
          price: this.price,
          prodUrl: this.prodUrl,
        };

        const response = await axios.post("https://capstoneconnection.onrender.com/AddNewProduct", payload);


        if (response.data) {

        this.products.pus({

          prodID: this.prodID = "",
          prodName: this.prodName = "",
          category: this.category = "",
          price: this.price = "",
          prodUrl: this.prodUrl = "",
         
        });
          this.prodID = "";
          this.prodName = "";
          this.category = "";
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
