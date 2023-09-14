<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <img src="https://i.postimg.cc/YqnDkQXk/Logotype_Boutique_Fashion_Neon.png" style="width:6rem; border-radius:100%">
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarSupportedContent">
        <ul class="navbar-nav navMoving ">
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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://i.postimg.cc/nztzQT9F/user.png" alt="user" style="border-radius: 50%; width: 60px; height: 60px;">

            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/register">Sign Up</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/signIn">Sign In</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/profile">Profile</router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="logout">Logout</a>
              </li>
            </ul>
          </li>
<!--         
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
        </form>  -->
      
  
      </div>
    </div>

</nav>


  
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()


export default {
    computed: {
      data() {
    return {
      isNavbarOpen: false, 
    };
  },
  computed: {
    user() {
      return this.$store.state.user || cookies.get('LegitUser');
    },
    result() {
      return this.user?.result;
    },
    isAdmin() {
      return this.result?.userRole?.toLowerCase() === "admin";
    },
  },
        },
    }
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
  background-color: white;
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
.navMoving{
margin-left: 70%;

  
}
</style>
