<template>
  <div>
    <h1>Shopping Cart</h1>
    
    <div class="container-cart">
      <div class="card-mb-3" v-for="(item, index) in cart" :key="item.prodID">
        <div class="row g-0">
       
          <div class="col-12 col-md-6">
            
            <img :src="item.prodUrl" class="img-fluid" alt="Product Image" style="width: 10rem; height: 12rem; padding: 2rem; margin:auto" loading="lazy">
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
              <button class="btn-cart btn-danger" @click="removeFromCart(index)">Remove</button>
              <router-link to="/signIn" class="btn-cart2 btn-primary">Checkout</router-link>
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
}

.color-option {

  width: 20px;
  height: 15px;
  cursor: pointer;
  border: 1px solid #ccc;
}

.selected {
  border: 2px solid #333;
}


.container-cart{
  background-color: white;
  height:fit-content;
}

.btn-cart, .btn-cart2{
  margin-top: 2rem;
  margin-right: 1rem;
background: purple;

text-align: center;
border: 3px solid white;

padding: 14px 10px;
 
  outline: none;
  color: white;
  border-radius: 24px;
outline: none;
color: white;
transition: 0.25px;
cursor: pointer ;
text-decoration: solid;
}
.addp-submit:hover{
  background: rgb(238, 216, 248);
  color: purple;

  
}
</style>
