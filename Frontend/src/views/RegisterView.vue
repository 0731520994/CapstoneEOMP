<template>
    <div class="container d-flex p-4">
     
        <form class="row d-flex" @submit.prevent="registerUser">
          <div class="col-6">
            <!-- <label for="firstName" class="text-start">UserID:</label>
            <input
              type="text"
              v-model="firstName"
              required
            /> -->
            <!-- fname -->
            <label for="firstName" class="text-start">First Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              v-model="info.firstName"
              required
            />
            <br>
            <!-- lastname -->
            <label for="lastname" class="text-start">Last Name:</label>
            <input
              type="text"
              placeholder="Enter your lastName"
              v-model="info.lastName"
              required
            />
            <br>
            <!-- gender -->
            <label for="role" class="text-start">Gender:</label>
            <input
              type="text"
              placeholder="Enter your gender"
              v-model="info.gender"
              required

            />
            <br>
            <!-- email -->
            <label for="email" class="text-start">Email:</label>
  
            <input
              type="email"
              placeholder="Enter your email"
              v-model="info.emailAdd"
              required
            />
            <br>
<!-- passwword -->
           <label for="password" class="text-start">Password</label>
            
            <input type="password" v-model="info.userPass" required />
        
           
            <br>
        <div class="col-6">
          <!-- <label for="role" class="text-start">Role:</label>
          <input
            type="role"
            placeholder="Enter your role"
            required
        /> -->

            <label for="text" class="text-start">profileUrl</label>
  
            <input
              type="text"
              placeholder=" "
              v-model="info.profileUrl"
              required
            />
           

          <button class="submit">Sign Up</button>
</div>
          </div>
        </form>

        <p>
          Have an account?
          <button type="submit"  class="register-link text-decoration-none text-white" >Log in </button>
    
        </p>
        </div>
  
      
 
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        info:{
      profileUrl:"",
      firstName: " ",
      lastName: " ",
      gender: " ",
      emailAdd: " ",
      userPass: " "
        }
      };
    },
    methods: {
      registerUser(){
        this.$store.dispatch('register', this.info)
      } 
    },
  };
  </script>
  