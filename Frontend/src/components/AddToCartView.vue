<template>
    <div class="single_card">
      <div class="cardSingle mb-3" style="max-width: 70%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="product?.prodUrl" class="card-img-top" :alt="product?.prodName">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title">{{ product?.prodName }}</h1>
              <h3 class="card-text1">{{ product?.price }}</h3>
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.product; // Update to use the correct state property
      },
    },
    created() {
      this.$store.dispatch('fetchProduct', this.$route.params.id);
    },
    methods: {
      addToCart(product) {
        this.$store.dispatch('addToCart', product);
      },
    },
  };
  </script>
  