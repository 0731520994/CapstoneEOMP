<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

      <input type="text" placeholder="Enter product name" v-model="product.prodName" />
      <input type="number" placeholder="Enter the price" v-model="product.price" />
      <input type="text" placeholder="Bea(1), Per(2), acce(3)" v-model="product.category" />
      <input type="text" placeholder="Enter the product link" v-model="product.prodUrl" />

      <button @click="updateProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>



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

  mounted() {

    const prodID = this.$route.params.prodID;
    this.$store.dispatch('fetchProduct', prodID);
  },
  methods: {
    editProduct() {
      this.$store.dispatch('editProduct', this.product);
    },
  },
}
</script>
