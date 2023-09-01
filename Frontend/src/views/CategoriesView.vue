<template>
  <div>
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" @click="showSection('Perfumes')">Perfumes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="showSection('Accessories')">Accessories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="showSection('Beauty')">Beauty</a>
        </li>
      </ul>
    </nav>

    <div class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
      <h4 v-if="activeSection === 'Perfumes'">Perfumes</h4>
      <div class="row row-cols-1 row-cols-md-3 g-4" v-if="activeSection === 'Perfumes'">
        <div class="col" v-for="product in filteredProducts('Perfumes')" :key="product.prodID">
          <!-- Product card template -->
          <ProductCard :product="product" />
        </div>
      </div>

      <h4 v-if="activeSection === 'Accessories'">Accessories</h4>
      <div class="row row-cols-1 row-cols-md-3 g-4" v-if="activeSection === 'Accessories'">
        <div class="col" v-for="product in filteredProducts('Accessories')" :key="product.prodID">
          <!-- Product card template -->
          <ProductCard :product="product" />
        </div>
      </div>

      <h4 v-if="activeSection === 'Beauty'">Beauty</h4>
      <div class="row row-cols-1 row-cols-md-3 g-4" v-if="activeSection === 'Beauty'">
        <div class="col" v-for="product in filteredProducts('Beauty')" :key="product.prodID">
          <!-- Product card template -->
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
; // Import the ProductCard component

export default {
  name: 'CategoriesView',
  components: {
    ProductCard, // Register the ProductCard component
  },
  data() {
    return {
      activeSection: 'Perfumes', // Set the initial active section
    };
  },
  computed: {
    filteredProducts() {
      return (category) => {
        // Filter products based on the active category
        return this.$store.state.products.filter(
          (product) => product.category === category
        );
      };
    },
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
