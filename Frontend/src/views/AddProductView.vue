<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

     

      <label>Name</label>
      <input type="text" placeholder="Enter product name" v-model="productData.prodName" />

      <label>Category</label>
      <select v-model="productData.category">
  <option value="Accessories">Accessories</option>
  <option value="Beauty">Beauty</option>
  <option value="Perfumes">Perfumes</option>
</select>


      <label>Price</label>
      <input type="number" placeholder="Enter the price" v-model="productData.price" />

      <label>Image</label>
      <input type="text" placeholder="Enter the product link" v-model="productData.prodUrl" />

      <button @click.prevent="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {
        prodName: "",
        category: "",
        price: "",
        prodUrl: ""
      },
      err: [], 
      products: [],
    };
  },
  methods: {

     addProduct() {
      console.log(this.productData);
        this.$store.dispatch('addProduct', this.productData)
      } 
  
    },
};







</script>
