<template>
  <div>
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/showSection('Perfumes')">Perfumes</router-link >
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/showSection('Accessories')">Accessories</router-link >
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/showSection('Beauty')">Beauty</router-link >
        </li>
      </ul>
    </nav>

    <div class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
      <div v-if="activeSection === 'Perfumes'">
        <h4>Perfumes</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="product in filteredProducts('Perfumes')" :key="product.prodID">
            <div class="card">
              <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">{{ product.category }}</p>
                <p class="card-text">R{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div v-if="activeSection === 'Accessories'">
        <h4>Accessories</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="product in filteredProducts('Accessories')" :key="product.prodID">
            <div class="card">
              <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">{{ product.category }}</p>
                <p class="card-text">R{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div v-if="activeSection === 'Beauty'">
        <h4>Beauty</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="product in filteredProducts('Beauty')" :key="product.prodID">
            <div class="card">
              <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">{{ product.category }}</p>
                <p class="card-text">R{{ product.price }}</p>
              </div>
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
    activeSection() {
  
      return this.$route.params.section; 
    },
    filteredProducts() {
      return (category) => {

   
        return this.$store.state[category] || [];
      };
    },
  },
  mounted() {

  },
};
</script>