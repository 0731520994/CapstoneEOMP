<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="err && err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in err" :key="index">
          {{ error }}
        </li>
      </ul>
      <div v-if="productData">
        <label>ID</label>
        <input type="number" placeholder="Enter productID" v-model="productData.prodID" />

        <label>Name</label>
        <input type="text" placeholder="Enter product name" v-model="productData.prodName" />

        <label>categoryID</label>
        <input type="text" placeholder="Bea(1), Per(2), acce(3)" v-model="productData.categoryID" />

        <label>Price</label>
        <input type="number" placeholder="Enter the price" v-model="productData.price" />

        <label>Image</label>
        <input type="text" placeholder="Enter the product link" v-model="productData.prodUrl" />

        <button @click="updateProductData" class="btn-submit">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      err: [], 
    }
  },
  computed: {
    ...mapGetters(['getProductById']),
    productData() {
      return this.getProductById(this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(['updateProduct']),
    async updateProductData() {
      if (!this.productData.prodName || !this.productData.categoryID || !this.productData.price || !this.productData.prodUrl) {
        this.err = ["Please fill in all fields"];
        return;
      }

      try {
        const payload = {
          prodID: this.$route.params.id,
          changes: {
            prodName: this.productData.prodName,
            categoryID: this.productData.categoryID,
            price: this.productData.price,
            prodUrl: this.productData.prodUrl,
          },
        };

        await this.updateProduct(payload);

        this.$router.push("/admin");
        alert("Product updated successfully");
      } catch (err) {
        this.err = [err.response?.data?.msg || "An error occurred"];
        console.error(err);
      }
    },
  },
};
</script>
