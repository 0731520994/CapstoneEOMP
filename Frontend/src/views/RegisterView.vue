<template>
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
  
        <p>
          Have an account?
          <router-link
            to="/login"
            class="register-link text-decoration-none text-white"
            >Log in</router-link
          >
        </p>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      };
    },
    methods: {
      async register() {
        try {
          const resp = await this.$store.dispatch("register", {
            firstName: this.firstName,
            lastName: this.lastName,
            userAge: this.userAge,
            gender: this.gender,
            userRole: this.userRole,
            emailAdd: this.emailAdd,
            userPass: this.userPass,
            userProfile: this.userProfile,
          });
          if (resp.success) {
            await Swal.fire({
              icon: "success",
              title: "Registration successful",
              text: "CONGRATULATIONS ,YOU ARE NOW REGISTERED ! Please Login",
            });
          } else {
            await Swal.fire({
              icon: "error",
              title: "Registration failed",
              text: resp.error || "Unexpected error",
            });
          }
          this.$router.push("/login");
        } catch (e) {
          console.error("Registration error: ", e);
        }
      },
    },
  };
  </script>
  