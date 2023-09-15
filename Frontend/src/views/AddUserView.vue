<template>

<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"></div><div>
    <div class="container flex-container">
      <ul class="alert alert-warning" v-if="this.err && this.err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.err" :key="index">
          {{ error }}
        </li>
      </ul>

     
      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">FirstName</label>
      <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" v-model="userData.lastName" placeholder="Enter your firstName"  required/>
    
      
      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">lastName</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="userData.lastName" placeholder="Enter your surname" required/>
    </div>

      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">Gender</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="userData.gender" placeholder="Male or Female" required/>
    </div>

      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">Email</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="userData.emailAdd" placeholder="Enter your email" required/>
    </div>

      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">Password</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="userData.userPass" placeholder="Enter your passsword" required/>
    </div>

      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">User Role</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" required/>
    </div>

      <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">Image</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="userData.profileUrl" placeholder="Enter your image url" required/>
    </div>



      <button @click.prevent="userData" class="btn-submit">Submit</button>
    </div>
  </div>
</div>
   
       
</template>

<script>


export default {

data() {
  return {
    userData: {
      firstName: "",
      lastName: "",
      userAge: "",
      gender: "",
      emailAdd: "",
      userPass: "",
      profileUrl: ""
    },  
     err: [], 
    users: [],
  }
},

methods: {
  methods: {

addUser() {
 console.log(this.userData);
   this.$store.dispatch('addUser', this.userData)
 } 

},
}
    }
</script>

<style lang="scss" scoped>

</style>