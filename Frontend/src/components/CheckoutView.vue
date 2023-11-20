<<<<<<< HEAD
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
=======
<template>
  <div class="cart">
    <h1 style="margin-top: 100px;"> Cart</h1>
    <div class="cart-container" v-if="cart.length > 0">

      <div class="product-list">
        <div class="product-item" v-for="product in cart" :key="product.prodID">
          <div class="product-info">
            <div class="product-details">
              <div class="product-image">
                <img style="width:10rem" :src="product.key.prodImg" alt="Product Image" />
              </div>
              <div class="product-name">{{ product.key.prodName }}</div>
              <div class="product-name">R{{ product.key.price }}</div>
             
              <div class="product-actions">
                <button @click="confirmDelete(product.key.prodID)" class="remove-button">Remove</button>
              </div>
              
            </div> 
          </div>
         
        </div>
      </div>
          <button @click="checkout" class="btn" style="margin-top: 15px; width:150px; background-color: rgb(208, 109, 109);">
            CHECKOUT</button>
        </div>
    <div v-else class="empty-cart-container"></div>
    
  </div>

</template>
<script>

export default {
  data() {
    return {
      productQuantities: {}, 
    };
  },
  computed: {
    cart() {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      return cartData;
    },
  }
}
</script>

<
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
