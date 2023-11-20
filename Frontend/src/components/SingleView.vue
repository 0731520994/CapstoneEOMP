<template>
  <div class="single_card">
  <div class="cardSingle mb-3" style="max-width: 70%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product?.prodUrl" class="card-img-top" :alt="product?.name" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto" loading="lazy">
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <h1 class="card-title-single">{{ product?.prodName }}</h1>
              <h3 class="card-text1">R{{ product?.price }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
             
</template>

<script>

export default {
  computed: {
      product(){
          return this.$store.state.ViewItem
      }
  },
  created(){
     this.$store.dispatch('fetchProduct',
      this.$route.params.id)
  }
}
</script>

<style >
.single_card{
background-color: white;


}

.card-title-single{
  margin-top: 20%;
}
</style>  
