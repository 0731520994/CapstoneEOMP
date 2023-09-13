<template>
  <div>
    <Spinner /> 
    <NavBarComp />
    <main class="container-fluid">
      <router-view/>
    </main>
    <FooterComp />
  </div>
</template>


<script>
import SpinnerComp from './components/SpinnerComp.vue';
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavbarComp.vue';


export default {
  name: 'App',
  components: {
    NavBarComp,
    FooterComp,
    SpinnerComp
  }
}
 
  


</script>
