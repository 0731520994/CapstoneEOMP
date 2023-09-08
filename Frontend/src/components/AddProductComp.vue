<template>
  <div>
    <div class="container flex-container">
      <label>ID</label>
      <input type="text"  placeholder="prodName" v-model="prodID"/>

      <label>Name</label>
      <input type="text"  placeholder="prodName" v-model="prodName"/>

      
      <label>categoryID</label>
      <input type="text"  placeholder="categoryID" v-model="categoryID"/>
      
      <label>Price</label>
      <input type="number"  placeholder="price" v-model="price"/>
      
      
      <label>Image</label>
      <input type="text"  placeholder="prodUrl" v-model="prodUrl"/>

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
    
    };
  },
  methods: {
    async addProduct() {
      try {
        await axios.post("https://capstoneconnection.onrender.com/products", {
          prodID: this.prodID,
          prodName: this.prodName,
          categoryID: this.categoryID,
          price: this.price,
          prodUrl: this.prodUrl,
        });

        this.prodID = "";
        this.productName = "";
        this.categorIDy = "";
        this.price = "";
        this.prodUrl = "";
       

        this.$router.push("/admin");
        alert("Product added successfully");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>