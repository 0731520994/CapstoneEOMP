<template>
  <div class="container d-flex p-4">
    <div class="col-6">
      <img
        src=""
        alt=""
      />
    </div>
    <div class="col-6">
      
      <h1>WELCOME BACK !</h1>

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
    </div>
    <br />
  </div>
  <br />
  <br />
</template>

<script>

export default {
  data() {
    return {
      emailAdd: "",
      userPass: "",
    };
  },
  beforeCreate() {
    this.$store.dispatch("cookieCheck");
  },
  methods: {
    async userLogin() {
      console.log("Reached");
      try {
        const payload = {
          emailAdd: this.emailAdd,
          userPass: this.userPass,
        };
        const resp = await this.$store.dispatch("login", payload);
        console.log("Login Response:", resp);
        if (resp.success && resp.token) {
          await Swal.fire({
            icon: "success",
            title: "Logged in Successfully",
            text: "You are now logged in!",
          });
          this.$router.push("/");
        } else {
          const errMsg = resp.error || "Unexpected error";
          await Swal.fire({
            icon: "error",
            title: "Login failed",
            text: errMsg,
          });
        }
      } catch (e) {
        console.error("Error while logging in: ", e);
      }
    },
  },
};
</script>