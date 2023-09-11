<template>
  <div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

      <label>ID</label>
      <input type="number" placeholder="Enter productID" v-model="product.prodID" />

      <label>Name</label>
      <input type="text" placeholder="Enter product name" v-model="product.prodName" />

      <label>categoryID</label>
      <input type="text" placeholder="Bea(1), Per(2), acce(3)" v-model="product.categoryID" />

      <label>Price</label>
      <input type="number" placeholder="Enter the price" v-model="product.price" />

      <label>Image</label>
      <input type="text" placeholder="Enter the product link" v-model="product.prodUrl" />

      <button @click="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:'addProduct',
  data() {
    return { 
      product: {
      prodID: "",
      prodName: "",
      categoryID: "",
      price: "",
      prodUrl: "",
      err: [], // Initialize an error array
      }
    };
  },

  methods: {

  
async addProduct() {
  
  if (!this.prodName || !this.categoryID || !this.price || !this.prodUrl) {
    this.err = ["Please fill in all fields"];
    return; 
  }

  try {
    const payload = {
      prodID: this.prodID,
      prodName: this.prodName,
      categoryID: this.categoryID,
      price: this.price,
      prodUrl: this.prodUrl,
    };

    const response = await axios.post("https://capstoneconnection.onrender.com/AddNewProduct", payload);

  
    if (response.data) {
     
      this.prodID = "";
      this.prodName = "";
      this.categoryID = "";
      this.price = "";
      this.prodUrl = "";
      this.err = [];

      this.$router.push("/admin");
      alert("Product added successfully");
    } else {
     
      this.err = ["An error occurred"];
    }
  } catch (err) {
   
    this.err = [err.response?.data?.msg || "An error occurred"];
    console.error(err);
  }
},
},
 
  // methods:{
  //   addProduct(){
  //         axios.post('https://capstoneconnection.onrender.com/AddNewProduct', this.product)
  //         .then(res =>{
  //           console.log(res.data)
  //           alert(res.data.msg);
  //           this.product={
  //     prodID: "",
  //     prodName: "",
  //     categoryID: "",
  //     price: "",
  //     prodUrl: "",
  //     err: [], // Initialize an error array
  //     }
  //         })
  //         .catch(function(error){
  //           if(error.response){
  //             console.log(error.response.data)
  //             console.log(error.response.status)
  //             console.log(error.response.headers)
  //           } else if(error.request){
  //             console.log(error.request);
  //           } else{
  //             console.log('Error', error.msg);
  //           }
  //         })
  //       }
  //     }

};
</script>


<!-- 
   
 -->