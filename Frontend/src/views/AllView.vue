<template>
  <div class="container-fluid" style="width: 75rem; height: 70rem">
    <div class="card-body">
      <h2>All Products</h2>
      <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product?.prodID">
          <div class="card">
            <img :src="product?.prodUrl" class="card-img-top img-fluid" :alt="product?.name" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
            <div class="card-inner-body">
              <h5 class="card-title">{{ product?.prodName }}</h5>
              <p class="card-text">R{{ product?.price }}</p>
            </div>
            <div class="card-footer">
              <div class="card-footer-buttons">
                <button @click="single(product?.prodID)" class="allbtn">See more</button>
                <button @click="addToCart(product?.prodID)" class="allbtn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- :to="{name:'single', params: {id: product?.prodID}  } -->

<script>


import SingleView from '@/components/SingleView.vue';
import AddToCartView from '@/components/AddToCartView.vue';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
  single(prodID) {
    const viewProd= this.products.find(
      (products)=> products.prodID===prodID
    );
    this.$store.commit("setViewItem", viewProd)
    this.$router.push({ name:"single",params:{prodID:prodID}
    })
  },
  addToCart(prodID) {
    const viewProd= this.products.find(
      (products)=> products.prodID===prodID
    );
    this.$store.commit("setViewCart", viewProd)
    this.$router.push({ name:"addToCart",params:{prodID:prodID}
    })
  },
  },
  components: {
      SingleView,
     AddToCartView,
  }
  
};


</script>

<style>

.card {
  margin: 6%;
  border-radius: 15%;
}

.card-inner-body {
  background-color: rgba(128, 0, 128, 0.277);
  color: black;
}

.card-footer-buttons {
  display: none;
}

.card-footer-buttons button {
  margin-right: 10px;
}
.card:hover .card-footer-buttons {
  display: block;
 
}

.allbtn{

 font-family: Georgia, 'Times New Roman', Times, serif;
 text-align: center;
 border: 3px solid white;
 padding: 5px 5px;
 background: purple;
 color: white;
 border-radius: 24px;
 transition: 0.25px;
 cursor: pointer ;
 text-decoration: solid; 
}


.allbtn:hover{
  color: black;
  background:  rgb(238, 216, 248);
}

@media (max-width: 650px) {

.card-body {
width: 15rem;
}

@media (max-width: 1108px) {
.card-body{
  width: 20rem;
}
}
}

</style>
