<template>
  <div>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="exampleInputfirstName1" class="form-label">firstName</label>
        <input type="text" class="form-control" id="exampleInputfirstName1" aria-describedby="emailHelp" v-model="userData.firstName" required/>
    </div>

    <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">lastName</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="userData.lastName" required/>
    </div>

    <div class="mb-3"> 
      <label for="exampleInputgender1" class="form-label">gender</label>
      <input type="text" class="form-control" id="exampleInputgender1" aria-describedby="emailHelp" v-model="userData.gender" required/>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="userData.emailAdd"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        minlength="4"
        v-model="userData.userPass"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputuserProfile1" class="form-label">userProfile</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputuserProfile1"
        v-model="userData.profileUrl"
        required
      />
      <p v-if="registrationMessage">{{ registrationMessage }}</p>
    </div>
   
    <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        gender: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
      
    };
  },




  methods: {

    register() {
      console.log(this.userData);
      this.$store.dispatch('register', this.userData)
    }
  }
}
</script>