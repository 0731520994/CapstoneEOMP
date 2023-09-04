<template>
  <div class="container-fluid">
    <h2>All Products</h2>
    <div class="row">
      <div class="col-md-3" v-for="product in products" :key="product?.prodID">
        <div class="card">
          <img :src="product?.prodUrl" class="card-img-top img-fluid" :alt="product?.name" style="width: 20rem; height:20rem; margin:auto" >
          <div class="card-body">
            <h5 class="card-title">{{ product?.prodName }}</h5>
           <button type="button">Add to cart</button>
          </div>
          <div class="card-footer">
            <p class="card-text">R{{ product?.price }}</p>
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

<style>
.card-body{
  background-color: grey;
}

.card-img-top{
  width: 70%;
}

</style>