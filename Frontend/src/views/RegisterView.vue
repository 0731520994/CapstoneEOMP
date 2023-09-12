<template>
  <div>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="exampleInputfirstName1" class="form-label">firstName</label>
        <input type="text" class="form-control" id="exampleInputfirstName1" aria-describedby="emailHelp" v-model="payload.firstName" required/>
    </div>

    <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">lastName</label>
      <input type="text" class="form-control" id="exampleInputlastName1" aria-describedby="emailHelp" v-model="payload.lastName" required/>
    </div>

    <div class="mb-3"> 
      <label for="exampleInputgender1" class="form-label">gender</label>
      <input type="text" class="form-control" id="exampleInputgender1" aria-describedby="emailHelp" v-model="payload.gender" required/>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="text"
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
        type="text"
        class="form-control"
        id="exampleInputuserProfile1"
        v-model="payload.profileUrl"
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
      payload: {
        firstName: "",
        lastName: "",
        gender: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
      registrationMessage: "", 
    };
  },
  methods: {
    async register() {
  try {
 
    if (
      !this.payload.firstName ||
      !this.payload.lastName ||
      !this.payload.gender ||
      !this.payload.emailAdd ||
      !this.payload.userPass ||
      !this.payload.profileUrl
    ) {
      window.alert("Please fill in all fields.");
      return;
    }

    console.log("Register method called");
    console.log("Payload:", this.payload);

    const response = await this.$store.dispatch("register", this.payload);

 
    if (response && response.result) {
      
      this.$store.dispatch("pushDataToAdmin", response.result);

      this.registrationMessage = response.msg || "Registration successful"; 

    
      window.alert("User added successfully!");
    } else {
  
      this.registrationMessage = "Registration failed";
      window.alert("Error occurred while registering user.");
    }
  } catch (error) {
    console.error("Registration error:", error);
    window.alert("Error occurred while registering user.");
  }
},
  },

}
</script>