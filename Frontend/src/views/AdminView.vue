<template>
<div>
        
            <h1 style="text-decoration:underline">Products</h1>
       
      <div class="sortBtns">
        <RouterLink to="/addProduct" class="btn btn-primary">Add Product</RouterLink>

       
      </div>
    
     



      <div class="admin_container ">
         <table class="table table-bordered ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Category ID</th>
                  <th>Price</th>
                  <th class="img-fluid">Image</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr class="tdSize" v-for="item in products" :key="item.prodID">
                  <td>{{ item.prodID }}</td>
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.categoryID }}</td>
                  <td>{{ item.price }}</td>
                  <td><img class="adminImg" :src="item.prodUrl" alt="" /></td>
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
    
        <div>
        </div>
  
        <!-- USER TABLE -->
       
            <h1 style="text-decoration:underline">Users</h1>
        
            <RouterLink to="/register" class="btn btn-primary">Add User</RouterLink>
         
<div class="adminUser_container">
    <table class="table-bordered">
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
                  <td>Admin</td>
                  <td><img class="tableImg" :src="item.profileUrl" alt="" /></td>
                  <td>
                    <div class="btnGroupUser">
                      <div>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#editUserModal"
                        >
                          EDIT
                        </button>
                      </div>
                      <button class="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</div>



   




 
  </template>
  
  <script>
  import axios from 'axios';
  import { mapState, mapActions } from 'vuex';
  
  
  export default {
    computed: {
      ...mapState(['products', 'users', 'adminData']), 
  
     
    },
  
    mounted() {
      this.fetchProducts();
      this.fetchUsers();
    },
    methods: {
  ...mapActions(['fetchProducts', 'fetchUsers']),

  async deleteProduct(prodID) {
    console.log(prodID);
    if (confirm('Are you sure you want to delete?')) {
      try {
        const response = await axios.delete(`https://capstoneconnection.onrender.com/product/${prodID}`);
        alert(response.data.msg);
        this.getProducts();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.msg);
        } else {
          console.error(error);
        }
      }
    }
  },
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