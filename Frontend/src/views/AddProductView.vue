<template>
   
  <div class="addProduct-fluid">
    <h2>Add Product</h2>
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
   <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="productData.price" required/>
 </div>

 <div class="mb-3">
   <label for="exampleInputlastName1" class="form-label">Image</label>
   <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="productData.prodUrl"/>
 </div>

 <button @click.prevent="addProduct" class="addp-submit">Submit</button>
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


.addProduct-fluid{
  width: 60%;
  justify-content: center;
    height:fit-content;
    margin-left: 30%;
    background-color: rgb(128, 0, 128);
    border-radius: 3rem;
    box-shadow: 10px 6px 4px 4px ;
    padding: 3rem;
    color: white;
    margin-top: 3rem;

    
}

h2{
  justify-content: center;
  text-align: center;

  
}


.addp-submit{

background: none;

text-align: center;
border: 3px solid white;
padding: 14px 10px;
margin-left: 45%;
outline: none;
color: white;
border-radius: 24px;
transition: 0.25px;
cursor: pointer ;
text-decoration: solid;
}
.addp-submit:hover{
  background: rgb(238, 216, 248);
  color: purple;

  
}





</style>