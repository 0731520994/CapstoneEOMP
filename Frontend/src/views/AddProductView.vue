<template>
   
  <div class="container-flex-container">
 <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
   <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
     {{ error }}
   </li>
 </ul>

 <div class="mb-3">
   <label for="exampleInputlastName1" class="form-label">Name</label>
   <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="productData.prodName" required/>
 </div>

 <div class="mb-3">
   <label for="exampleSelectName" class="form-label">Category</label>
   <select class="form-control" v-model="productData.category">
     <option value="Accessories">Accessories</option>
     <option value="Beauty">Beauty</option>
     <option value="Perfumes">Perfumes</option>
   </select>
 </div>

 <div class="mb-3">
   <label for="exampleInputlastName1" class="form-label">Price</label>
   <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" placeholder="Enter the price" v-model="productData.price" required/>
 </div>

 <div class="mb-3">
   <label for="exampleInputlastName1" class="form-label">Image</label>
   <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" placeholder="Enter the product link" v-model="productData.prodUrl"/>
 </div>

 <button @click.prevent="addProduct" class="btn-submit">Submit</button>
</div>


</template>

<script>
export default {
 data() {
   return {
     productData: {
       prodName: "",
       category: "",
       price: "",
       prodUrl: ""
     },
     err: [], 
     products: [],
   };
 },
 methods: {

    addProduct() {
     console.log(this.productData);
       this.$store.dispatch('addProduct', this.productData)
     } 
 
   },
};


</script>

<style>







</style>