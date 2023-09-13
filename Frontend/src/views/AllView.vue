<template>
  <div class="container-fluid" style="width: 75rem; height: 70rem">
    <label>Filter</label>
    <select v-model="selectedFilter">
      <option value="all">All</option>
      <option value="Beauty">Beauty</option>
      <option value="Accessories">Accessories</option>
      <option value="Perfumes">Perfumes</option>
    </select>
    
    <label>Sort</label>
  <select v-model="selectedSort">
    <option value="alphabetically">Alphabetically</option>
    <option value="price-high">Price High to Low</option>
    <option value="price-low">Price Low to High</option>
  </select>
    <label>Search</label>
    <input v-model="searchTerm" type="text" placeholder="Search for a product..." />


    <div class="card-body">
      <div class="row">
        <div class="col-md-3" v-for="product in filteredAndSortedProducts" :key="product?.prodID">
          <div class="card">
            <img :src="product?.prodUrl" class="card-img-top img-fluid" :alt="product?.name" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
            <div class="card-inner-body">
              <h5 class="card-title">{{ product?.prodName }}</h5>
              <p class="card-text">R{{ product?.price }}</p>
            </div>
            <div class="card-footer">
              <div class="card-footer-buttons">
                <button @click="single(product?.prodID)" class="allbtn">See more</button>
                <button @click="addToCart(product)" class="allbtn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sweet from 'sweetalert'
import { mapState, mapActions } from 'vuex';
import SingleView from '@/components/SingleView.vue';


export default {
  data() {
    return {
      selectedFilter: 'all', 
      selectedSort: 'options', 
      searchTerm: '',
    };
  },
  computed: {
    ...mapState(['products']), 
    filteredAndSortedProducts() {
     
      let filteredProducts = this.products;

    
      if (this.selectedFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === this.selectedFilter);
      }

  
      if (this.searchTerm.trim() !== '') {
        const searchTermLower = this.searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(product => product.prodName.toLowerCase().includes(searchTermLower));
      }

  
      if (this.selectedSort === 'alphabetically') {
        filteredProducts.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.selectedSort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
      }

      return filteredProducts;
    },
  },
  methods: {
    ...mapActions(['fetchProducts']), 

    single(prodID) {
    const viewProd= this.products.find(
      (products)=> products.prodID===prodID
    );
    this.$store.commit("setViewItem", viewProd)
    this.$router.push({ name:"single",params:{prodID:prodID}
    })
  },
  addToCart(product) {
    if (product) {
      this.$store.commit('addToCart', product);

      this.$router.push({ name: 'checkout', query: { cart: JSON.stringify(this.$store.state.cart) } });
    } else {
    
      sweet({
        title: "",
        text: "",
        type: "",
        timer: 2000
      });
    }
  },

  

  },

  components: {
    SingleView,
   
  },
  mounted() {
    this.$store.dispatch('fetchProducts'); 
  },
};
</script>

<style>

.card {
  margin: 6%;
  border-radius: 15%;
  background-color: white;
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
