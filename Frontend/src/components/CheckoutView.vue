// CheckoutView.vue

<template>
  <div>
    <h2>Checkout</h2>
    <div v-if="selectedProduct">
      <h3>{{ selectedProduct.prodName }}</h3>
      <p>Price: R{{ selectedProduct.price }}</p>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedProduct() {
      return this.$store.state.selectedProduct;
    },
  },
  methods: {
    checkout() {
      alert('Checkout button clicked! Implement your checkout logic here.');
    },
  },
};
</script>

<style>

</style>
