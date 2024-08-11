<template>
  <div>
    <h1 class="h1-adminp">Products.</h1>
    <div class="sortBtns">
      <button type="button" class="btn-add btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">Add Product</button>
    </div>

    <div class="adminUser_container">
      <!-- Spinner -->
      <div v-if="loadingProducts" class="row">
        <spinner-comp />
      </div>
      <!-- Product Table -->
      <div class="table-responsive" v-else>
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
          <tbody>
            <tr class="tdSize" v-for="item in products" :key="item.prodID">
              <td>{{ item.prodID }}</td>
              <td>{{ item.prodName }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
              <td><img class="adminImg" :src="item.prodUrl" alt="" loading="lazy" /></td>
              <td class="btnGroupUser">
                <router-link :to="'/editProduct/' + item.prodID" class="btn-edit btn-primary">Edit</router-link>
                <button class="btn-delete btn-danger" @click="deleteProduct(item.prodID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- USER TABLE -->
    <h1 class="h1-admin">Users.</h1>
    <router-link to="/register" class="btn-add btn-primary">Add User</router-link>

    <div class="adminUser_container">
      <!-- Spinner -->
      <div v-if="loadingUsers" class="row">
        <spinner-comp />
      </div>
      <!-- User Table -->
      <div class="table-responsive" v-else>
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
              <td><img class="tableImg" :src="item.profileUrl" alt="" loading="lazy" /></td>
              <td class="btnGroupUser">
                <button type="button" class="btn-edit btn-primary" data-bs-toggle="modal" data-bs-target="#editUserModal">Edit</button>
                <button class="btn-delete btn-danger" @click="deleteUser(item.userID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="alert alert-warning" v-if="err && err.length > 0">
              <li class="mb-0 ms-3" v-for="(error, index) in err" :key="index">
                {{ error }}
              </li>
            </ul>

            <div class="mb-3">
              <label for="productName" class="form-label">Name</label>
              <input type="text" class="form-control transparent-input" id="productName" v-model="productData.prodName" required />
            </div>

            <div class="mb-3">
              <label for="productCategory" class="form-label">Category</label>
              <select class="form-control transparent-input" id="productCategory" v-model="productData.category">
                <option value="Accessories">Accessories</option>
                <option value="Beauty">Beauty</option>
                <option value="Perfumes">Perfumes</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="productPrice" class="form-label">Price</label>
              <input type="text" class="form-control transparent-input" id="productPrice" v-model="productData.price" required />
            </div>

            <div class="mb-3">
              <label for="productImage" class="form-label">Image</label>
              <input type="text" class="form-control transparent-input" id="productImage" v-model="productData.prodUrl" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-add btn-primary" @click.prevent="addProduct">Submit</button>
          </div>
        </div>
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
  data() {
    return {
      productData: {
        prodName: '',
        category: '',
        price: '',
        prodUrl: '',
      },
      err: [],
    };
  },
  computed: {
    ...mapState(['products', 'users']),
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchProducts', 'addProduct', 'deleteProduct', 'deleteUser']),
    addProduct() {
      if (!this.productData.prodName || !this.productData.category || !this.productData.price) {
        this.err = ['Please fill in all required fields'];
        return;
      }
      this.$store.dispatch('addProduct', this.productData);
      this.productData = { prodName: '', category: '', price: '', prodUrl: '' };
      this.err = [];
      const addProductModal = document.getElementById('addProductModal');
      const modal = bootstrap.Modal.getInstance(addProductModal);
      modal.hide();
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style>


.table {
 
  background-color: white;
  margin-top: 4rem;
}

.tableImg {
  width: 15%;
}

.adminImg {
  width: 10%;
}

.user_container {
  width: 1000rem;
 
}

.modal-content {
  background-color: rgb(238, 216, 248);
  width: 40rem;
  padding: 20px;
}

.modal-title {
  text-align: center;
  width: 100%;
}

.transparent-input {
  background: transparent;
  border: 1px solid grey;
}

.transparent-input:focus {
  box-shadow: none;
  border-color: grey;
}

.btn-add {
  margin-top: 4%;
  margin-bottom: 1%;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 1% 2%;
  cursor: pointer;
  width: 12%;
  text-decoration: none;
  
}

.btn-add:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}

.btn-delete {
  margin: 0;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: inline-block;
}

.btn-delete:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}

.btn-edit {
  margin: 0;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
}

.btn-edit:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}

.h1-admin {
  margin: 5%;
  text-align: center;
  font-size: 5rem;
  color: black;
}

.h1-adminp {
  margin: 0 5%;
  text-align: center;
  font-size: 5rem;
  color: black;
}

.btnGroupUser {
  display: flex;
  justify-content: space-between;
  gap: 0.1rem;
}


</style>