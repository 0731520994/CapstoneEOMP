<template>
  <div>
          
              <h1 style="text-decoration:underline">Products</h1>
         
        <div class="sortBtns">
          <RouterLink to="/addProduct" class="btn btn-primary">Add Product</RouterLink>
  
         
        </div>
      
       
  <div class="adminUser_container">
    <div class="table-responsive" v-if="products">
      <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th> 
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody >
   
        <tr class="tdSize" v-for="item in products" :key="item.prodID">
          <td>{{ item.prodID }}</td>
          <td>{{ item.prodName }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td><img class="adminImg" :src="item.prodUrl" alt="" loading="lazy"/></td>
          <td>
            <div class="btnGroupUser"> 
              <router-link :to="'/editProduct/' + item.prodID" class="btn btn-primary">Edit</router-link>
              <button class="btn btn-danger" @click="deleteProduct(item.prodID)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="row">
        <spinnerComp/>
    </div>
  </div>
    
          <!-- USER TABLE -->
          <h1 style="text-decoration: underline">Users</h1>

  <router-link to="/register" class="btn btn-primary">Add User</router-link>
  
  <div class="adminUser_container">
    <div class="table-responsive" v-if="users">
      <table class="table table-bordered">
      <thead>
        <tr>
          <th>#ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Encrypt Password</th>
          <th>Role</th>
          <th>Image</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>

        <tr v-for="item in users" :key="item.userID">
          <td>{{ item.userID }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.emailAdd }}</td>
          <td>{{ item.userPass }}</td>
          <td></td> 
          <td><img class="tableImg" :src="item.profileUrl" alt="" loading="lazy"/></td>
          <td>
            <div class="btnGroupUser">
             
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#editUserModal"
              >
                EDIT
              </button>
              <button class="btn btn-danger" @click="deleteUser(item.userID)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody >
    </table>
  </div>
  <div v-else class="row">
        <spinnerComp/>
    </div>
  </div>
  </div>
   
    </template>

  <script>
    
    import { mapState, mapActions } from 'vuex';
    import SpinnerComp from '@/components/SpinnerComp.vue';
    export default {

      components: {
        SpinnerComp,
      },

      computed: {
        ...mapState(['products', 'users']), 
    
       
      },
    
      mounted() {
      
        this.$store.dispatch("fetchUsers");

        this.$store.dispatch("fetchProducts");
      },
      methods: {
  
     deleteProduct(prodID) {
      this.$store.dispatch('deleteProduct', prodID);
      },

      deleteUser(userID) {
        this.$store.dispatch("deleteUser", userID);
      }
    },
  }
    
</script>
    
    
    <style>
  
  .sortBtns{
  margin: 3rem;
  }
  
  
  .tableImg{
      width: 15%;
  }
  
  .adminImg{
      width: 10%;
      
  }
  .user_container{
      width: 1000rem;
  }
  
  </style>