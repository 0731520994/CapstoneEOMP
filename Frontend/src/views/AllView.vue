<template>
<div>
<div class="container-fluid">
  <h2>All Products</h2>
    <div class="col">
      <div class="card h-100"  v-for="product in products" :key="product?.prodID">
        <img :src="product?.prodUrl" class="card-img-top" :alt="product?.name">
        <div class="card-body">
          <h5 class="card-title">{{ product?.prodName }}</h5>
          <p class="card-texts">{{ product?.categoryID }}</p>
        <div class="card-footer">
          <p class="card-texts">R{{ product?.price }}</p>
        </div>
      </div>
    </div>
    </div>
</div> 
</div>
      
 

    
</template>

<script>
    
    export default {
      computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
  
</script>

<style lang="scss" scoped>

</style>