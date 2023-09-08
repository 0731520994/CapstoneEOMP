<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <img src="https://i.postimg.cc/YqnDkQXk/Logotype_Boutique_Fashion_Neon.png" style="width:6rem; border-radius:100%">
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" :class="{ show: isNavbarOpen }" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item justify-content-end" >
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active"  aria-current="page" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/products">All</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/categories">Categories</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/checkout">Checkout</router-link>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
        </form> 

<!-- Button to trigger the modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Login
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <!-- Modal content goes here -->
      <div class="modal-body">
        <div class="container d-flex p-4">
          <div class="col-1">
            <img
              src=""
              alt=""
            />
          </div>
          <div class="col-6">
            <h3>WELCOME😊</h3>
            <form @submit.prevent="userLogin">
              <label for="email" class="text-start">ENTER YOUR EMAIL</label>
              <br />
              <input
                type="email"
                name="email"
                v-model="emailAdd"
                placeholder="Enter your email"
              />
              <br />
              <label for="password" class="text-start">PASSWORD</label>
              <br />
              <input type="password" v-model="userPass" name="password" />
              <button type="submit">Log In</button>
              <p>
                Don't have an account?
                <router-link
                  to="/register"
                  class="register-link text-decoration-none text-white"
                  >Register</router-link
                >
              </p>
            </form>

            <!-- Sign Up button -->
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#signUpModal">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Sign Up Modal -->
<div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
  <div class="container d-flex p-4">
      <div class="col-6">
        <img
          src="https://i.postimg.cc/YCJbkvPZ/c9bl-removebg-preview.png"
          alt=""
        />
      </div>
      <div class="col-6">
    
  
        <form class="row d-flex" @submit.prevent="register">
          <div class="col-6">
            <label for="firstName" class="text-start">First Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              v-model="firstName"
              required
            />
            <label for="lastname" class="text-start">Surname:</label>
            <input
              type="text"
              placeholder="Enter your surname"
              v-model="lastName"
              required
            />
            <label for="role" class="text-start">Role:</label>
            <input
              type="text"
              placeholder="Enter your role"
              v-model="userRole"
              required
            />
            <label for="text" class="text-start">userUrl</label>
  
            <input
              type="text"
              placeholder=""
              v-model="userProfile"
              required
            />
          </div>
          <div class="col-6">
            <label for="gender" class="text-start">Gender:</label>
            <input
              type="gender"
              placeholder="Enter you gender"
              v-model="gender"
              required
            />
            <label for="email" class="text-start">EMAIL:</label>
  
            <input
              type="email"
              placeholder="Enter your email"
              v-model="emailAdd"
              required
            />
  
            <label for="age" class="text-start">Age:</label>
            <input
              type="number"
              placeholder="Enter your age"
              v-model="userAge"
              required
            />
            <label for="password" class="text-start">PASSWORD</label>
  
            <input type="password" v-model="userPass" required />
          </div>
          <button class="submit">Sign Up</button>
        </form>
  
      </div>
    </div>
</div>


</div>
</div>
</nav>


  
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies();
import LoginView from '@/views/LoginView.vue';


export default {

  computed: {
          user() {
            return this.$store.state.user ||
            cookies.get('LegitUser')
          },
          result() {
          return this.user?.result
        },
        isAdmin() {
          return this.result?.userRole?.toLowerCase() === "admin"
        }
        },
    
  methods: {
    openLoginModal() {
      // Toggle the Bootstrap modal using jQuery
      $('#loginModal').modal('show');
    },
  },
};
</script>

<style>
body{
  background-color: rgb(238, 216, 248);
}

.navbar-nav, .form{
background-color: white;
color:white;
width: fit-content;

}

.nav-link{
  color: white;
}

.nav-link:hover{
  background-color: purple;
  border-radius: 50%;
  color: white;
 
}

.btn {
  border:white;
  margin: white;
  outline: white;
  color:white;
  border: 3px solid purple;
}
</style>
