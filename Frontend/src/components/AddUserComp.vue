<template>
    <div>
      

    <div class="dropdown_2 btn-group dropstart">
                  
     
      <button type="button" class="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_add_2"><b>+</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
      </svg></button>
      
    
      
      <form class="dropdown-menu p-4" id="form_for_dropdown" @submit.prevent="addUser">
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">ID:</label>
          <input type="first_name" class="form-control" id="exampleDropdown" v-model="newUser.userID" >
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">First Name:</label>
          <input type="name" class="form-control" id="exampleDropdown" v-model="newUser.lastName" placeholder="Enter your firstName">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">LastName:</label>
          <input type="lastname" class="form-control" id="exampleDropdown" v-model="newUser.userAge" placeholder="Enter your lastName">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Gender:</label>
          <input type="gender" class="form-control" id="exampleDropdown" v-model="newUser.gender" placeholder="Enter your gender">
        </div>
       
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Email Address:</label>
          <input type="email" class="form-control" id="exampleDropdown" v-model="newUser.emailAdd" placeholder="Enter your email">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Password:</label>
          <input type="password" class="form-control" id="exampleDropdown" v-model="newUser.userPass" placeholder="Enter your passsword">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Role:</label>
          <input type="useRole" class="form-control" id="exampleDropdown" v-model="newUser.userRole" placeholder="Enter your role">
        </div>


        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Image:</label>
          <input type="userUrl" class="form-control" id="exampleDropdown" v-model="newUser.userProfile" placeholder="Enter your image url">
        </div>
        
        
        
        <button type="submit" class="btn" id="add_button_dropdown">Add</button>
      </form>
    </div>
    </div>
</template>

<script>

import axios from "axios";
    export default {
data() {
  return {
    newUser: {
      firstName: "",
      lastName: "",
      userAge: "",
      gender: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: ""
    }
  }
},
methods: {
    data() {
      return {
      userID: " ",
      firstName: " ",
      lastName: " ",
      gender: " ",
      emailAdd: " ",
      userPass: " ",
      userRole: " ",
      userUrl:" "
      
      };
    },
   
    methods: {
      async addUser() {
        try {
          await axios.post("https://capstoneconnection.onrender.com/users", {
            userID: this.userID,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            emailAdd: this.emailAdd,
            userPass: this.userPass,
            userRole: this.userRole,
            userUrl: this.userUrl
          });

          this.userID = "";
          this.firstName = "";
          this.lastName = "";
          this.gender = "";
          this.emailAdd= "";
          this.userPass="";
          this.userRole="";
          this.userUrl = "";
         
  
          this.$router.push("/admin");
          alert("user added successfully");
        } catch (err) {
          alert(err);
        }
      }
    }
    }
};
</script>

<style lang="scss" scoped>

</style>