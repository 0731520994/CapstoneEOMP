<template>
  <div>
      <form @submit.prevent="register">
    <div class="mb-3">
      <label for="exampleInputfirstName1" class="form-label">firstName</label>
      <input
        type="firstName"
        class="form-control"
        id="exampleInputfirstName1"
        aria-describedby="emailHelp"
        v-model="payload.firstName"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">lastName</label>
      <input
        type="lastName"
        class="form-control"
        id="exampleInputlastName1"
        aria-describedby="emailHelp"
        v-model="payload.lastName"
        required
      />
    
    </div>
    <div class="mb-3">
      <label for="exampleInputgender1" class="form-label">gender</label>
      <input
        type="gender"
        class="form-control"
        id="exampleInputgender1"
        aria-describedby="emailHelp"
        v-model="payload.Gender"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="payload.emailAdd"
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
        v-model="payload.userPass"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputuserProfile1" class="form-label">userProfile</label>
      <input
        type="userProfile"
        class="form-control"
        id="exampleInputuserProfile1"
        v-model="payload.userProfile"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
  </div>
</template>

<script>
  export default {
      data() {
  return {
    payload: {
  firstName: "",
  lastName: "",
  Gender: "",
  emailAdd: "",
  userPass: "",
  profileUrl: ""
        }
      }
},
methods: {
  register() {
    this.$store.dispatch('register', this.payload)
  }
}
  }
</script>

<style scoped>

</style>