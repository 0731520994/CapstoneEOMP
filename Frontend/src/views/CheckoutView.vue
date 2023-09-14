<template>
  <div class="container">
    <h2>Checkout</h2>
    <div class="row">
      <div class="col-md-8">
        <ul class="list-group">
          <li
            v-for="(item, index) in cart"
            :key="item.prodID"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <img :src="item.prodUrl" alt="Product Image" class="img-thumbnail mr-3" />
              {{ item.prodName }}
            </div>
            <div>
              R {{ item.amount }}
              <button @click="removeFromCart(index)" class="btn btn-danger btn-sm ml-3">Remove</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total</h5>
            <p class="card-text">R {{ getTotal() }}</p>
            <button class="btn btn-primary">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Initialize cart as an empty array
    };
  },
  created() {
    // Retrieve and parse the cart data from the query parameter
    const cartData = this.$route.query.cart;
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  },
  methods: {
    removeFromCart(index) {
      // Implement the logic to remove an item from the cart
    },
    getTotal() {
      // Calculate the total amount in the cart
      return this.cart.reduce((total, item) => total + item.amount, 0);
    },
  },
};
</script>

<style scoped>
img {
  width: 14rem;
  height: 18rem;
}
</style>
