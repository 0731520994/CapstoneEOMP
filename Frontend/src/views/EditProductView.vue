<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>
      <div v-if="product">
        <label>ID</label>
        <input type="number" placeholder="Enter productID" v-model="product.prodID" />

        <label>Name</label>
        <input type="text" placeholder="Enter product name" v-model="product.prodName" />

        <label>categoryID</label>
        <input type="text" placeholder="Bea(1), Per(2), acce(3)" v-model="product.categoryID" />

        <label>Price</label>
        <input type="number" placeholder="Enter the price" v-model="product.price" />

        <label>Image</label>
        <input type="text" placeholder="Enter the product link" v-model="product.prodUrl" />

        <button @click="updateProduct" class="btn-submit">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        prodID: null,
        prodName: "",
        categoryID: "",
        price: null,
        prodUrl: "",
      },
      err: [], // Initialize an error array
    };
  },

  mounted() {
    this.getProductData(this.$route.params.id);
  },

  methods: {
    getProductData(productID) {
      axios.get(`https://capstoneconnection.onrender.com/product/${productID}`).then((res) => {
        this.product = res.data.product;
      });
    },

    async updateProduct() {
      // Validate the fields
      if (!this.product.prodName || !this.product.categoryID || !this.product.price || !this.product.prodUrl) {
        this.err = ["Please fill in all fields"];
        return; // Stop execution if there are validation errors
      }

      try {
        const payload = {
          prodID: this.product.prodID,
          prodName: this.product.prodName,
          categoryID: this.product.categoryID,
          price: this.product.price,
          prodUrl: this.product.prodUrl,
        };

        const response = await axios.patch(
          `https://capstoneconnection.onrender.com/product/${this.$route.params.id}`,
          payload
        );

        // Check if the response is successful (status code 200)
        if (response.status === 200) {
          // Clear the form and error messages
          this.$router.push("/admin");
          alert("Product updated successfully");
        } else {
          // Handle the case where the response status is not 200
          this.err = ["An error occurred"];
        }
      } catch (err) {
        // Handle any errors that occur during the request
        this.err = [err.response?.data?.msg || "An error occurred"];
        console.error(err);
      }
    },
  },
};
</script>
