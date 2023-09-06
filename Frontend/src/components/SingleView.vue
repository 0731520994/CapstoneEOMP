<template>
    <div class="evety">

    <div class="cardSingle mb-3" style="max-width: 70%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="product?.prodUrl" class="card-img-top" :alt="product?.name">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{{ product?.prodName }}</h1>
                <h3 class="card-text1">{{ product?.price }}</h3>
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
            return this.$store.state.product
        }
    },
    created(){
       this.$store.dispatch('fetchProduct',
        this.$route.params.id)
    }
}
</script>

<style >



</style>