<template>
  <div>
    <h1>Shopping Cart</h1>
    
    <div class="container" v-for="item in cart" :key="item.prodID">
      <div class="card" >
<div class="row g-0" >
  <div class="col-12 col-md-6">
    <img :src="item.prodUrl">
  </div>
  <div class="col-12 col-md-6">
    <div class="card-body">
      <h5 class="card-title">{{ item.prodName }}</h5>
      <p class="card-text" style="color: black;">R {{ item.amount }}</p>
      <button class="btn" @click="removeFromCart(index)">Remove</button>
      
    </div>
  </div>
</div>
</div>
    </div>
    <div class="container" id="total">
      <h1 class="totals">Total : {{ getTotal }}</h1>
    </div>
    <h1>Enter Card Detials</h1>
    <div class="divs">
      <div class="form row">
      <form action="https://formspree.io/f/mnqkqnag" method="POST">
          <div style="display: flex; justify-content: center;">
            <div class="mb-3 col-md-6">
            <label for="exampleFormControlInput1" class="form-label"
              >Name</label
            >
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name"
              name="name"
              required
            />
          </div>
          <div class="mb-3 col-md-6" style="margin-left: 1rem;">
            <label for="exampleFormControlInput1" class="form-label"
              >Surname</label
            >
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Surname"
              name="surname"
              required
            />
          </div>
        </div>
        <div style="display: flex; justify-content: center;">
          <div class="mb-3 col-md-9">
            <label for="exampleFormControlInput1" class="form-label"
              >Card Number</label
            >
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="xxx-xxx-xxx-xxx"
              name="email"
              required
            />
          </div>
          <div class="mb-3 col-md-3" style="margin-left: 1rem;">
            <label for="exampleFormControlInput1" class="form-label"
              >CVV</label
            >
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="xxx"
              name="email"
              required
            />  
          </div>
        </div> 
        <h5 style="color: white;">Expiry date</h5>
        <div style="display: flex; justify-content: center;">
          <div class="mb-3 col-md-9">
            <label for="exampleFormControlInput1" class="form-label"
              ></label
            >
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Month"
              name="email"
              required
            />
          </div>
          <div class="mb-3 col-md-3" style="margin-left: 1rem;">
            <label for="exampleFormControlInput1" class="form-label"
              ></label
            >
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Year"
              name="email"
              required
            />  
          </div>
        </div>   
          <button class="btn" id="btnn" type="submit">Checkout</button>
        </form>
    </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
  export default {
    computed: {
  cart() {
    return this.$store.state.cart;
  },
},
computed: {
          ...mapGetters(["getTotal"]),
          cart() {
              return this.$store.state.cart
          }
      },
methods: {
  removeFromCart(index) {
    this.$store.dispatch('removeFromCartAction', index);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  },
 
},
  }
</script>
