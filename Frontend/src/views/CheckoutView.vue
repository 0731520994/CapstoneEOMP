<template>
  <div>
    <h1 class="h1-cart">Shopping Cart.</h1>
    
    <div class="container-cart">
      <div class="card mb-3" v-for="(item, index) in cart" :key="item.prodID">
        <div class="row g-0">
       
          <div class="col-12 col-md-6 text-center">
            <img :src="item.prodUrl" class="img-fluid" alt="Product Image" style="width: 8rem; height: 8rem; padding: 2rem;" loading="lazy">
            <div class="color-selector">
              <label for="colorSelect">Select Color:</label>
              <select id="colorSelect" v-model="item.selectedColor">
                <option v-for="color in colorOptions" :key="color" :value="color">{{ color }}</option>
              </select>
              <div class="color-options">
                <span
                  v-for="color in colorOptions"
                  :key="color"
                  class="color-option"
                  :style="{ backgroundColor: color }"
                  @click="selectColor(item, color)"
                  :class="{ 'selected': item.selectedColor === color }"
                ></span>
              </div>
            </div>
          </div>
        
          <div class="col-12 col-md-6 d-flex flex-column">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 class="card-title">{{ item.prodName }}</h5>
                <p class="card-text" style="color: black;">R {{ item.price }}</p>
              </div>
              <div class="button-group d-flex">
                <button class="btn-cart btn-danger" @click="removeFromCart(index)">Remove</button>
                <router-link to="/signIn" class="btn-cart2 btn-primary">Checkout</router-link>
              </div>
            </div>
          </div>
        </div>
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
    colorOptions() {
      return ['red', 'white', 'blue', 'pink'];
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCartAction', index);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    selectColor(item, color) {
      item.selectedColor = color;
    },
  },
};
</script>

<style scoped>
.color-options {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 17rem;
  margin-top: 0.5rem;
}

.color-option {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.selected {
  border: 2px solid #333;
}

.container-cart {
  height: fit-content;
  padding: 1rem;
  margin: 1rem;
}

.card {
  border: 1px solid #ccc; /* Grey border */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  padding: 1rem;
 
}

.btn-cart, .btn-cart2 {
  background: purple;
  text-align: center;
  border: none;
  padding: 0.5rem 1rem;
  outline: none;
  color: rgb(238, 216, 248);
  transition: background 0.25s, color 0.25s;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0.5rem; /* Add some space between the buttons */
}

.btn-cart:hover, .btn-cart2:hover {
  color: purple;
  border: 1px solid purple;
  background-color: transparent;
}

.h1-cart {
  text-align: center;
  font-size: 3rem;
  color: black;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.card-title {
  margin-top: 0;
}
</style>
