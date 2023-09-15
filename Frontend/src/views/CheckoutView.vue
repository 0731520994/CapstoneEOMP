<template>
  <div>
    <h1>Shopping Cart</h1>
    
    <div class="container" v-for="(item, index) in cart" :key="item.prodID">
      <div class="card">
        <div class="row g-0">
          <div class="col-12 col-md-6">
            <img :src="item.prodUrl">
          </div>
          <div class="col-12 col-md-6">
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text" style="color: black;">R {{ item.price }}</p>
              <div>
                <label for="colorSelect">Select Color:</label>
                <div class="color-options">
                  <span
                    v-for="color in colorOptions"
                    :key="color"
                    class="color-option"
                    :style="{ backgroundColor: color }"
                    @click="selectColor(item, color)"
                    :class="{ 'selected': item.selectedColor === color }"
                  ></span>
                  <select id="colorSelect" v-model="item.selectedColor">
                    <option v-for="color in colorOptions" :key="color" :value="color">{{ color }}</option>
                  </select>
                </div>
              </div>
              <button class="btn" @click="removeFromCart(index)">Remove</button>
              <router-link to="/signIn" class="btn btn-primary">Checkout</router-link>
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
  gap: 10px;
}

.color-option {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ccc;
}

.selected {
  border: 2px solid #333;
}



.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-quantity {
  padding: 5px 10px;
  font-size: 16px;
}

.quantity {
  font-size: 18px;
}
</style>
