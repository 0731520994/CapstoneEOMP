<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img src="https://i.postimg.cc/1zpbL8Kc/Logotype-Boutique-Fashion-Neon.png" style="width:6rem; border-radius:100%">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav navMoving">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="showContact">Contact</a>
          </li>
          <li class="nav-item">
            <button class="btn-login" @click="showLogin">Login</button>
          </li>
        </ul>
      </div>
    </div>
    <SignIn :show="showLoginBox" @close="showLoginBox = false" @switchToSignup="switchToSignup"></SignIn>
    <SignUp :show="showSignupBox" @close="showSignupBox = false" @switchToLogin="switchToLogin"></SignUp>
    <ContactView :show="showContactBox" @close="showContactBox = false"></ContactView>
  </nav>
</template>

<script>
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';
import ContactView from './ContactView.vue';

export default {
  components: {
    SignIn,
    SignUp,
    ContactView
  },
  data() {
    return {
      showLoginBox: false,
      showSignupBox: false,
      showContactBox: false
    };
  },
  methods: {
    showLogin() {
      this.showLoginBox = true;
      this.showSignupBox = false;
    },
    switchToSignup() {
      this.showSignupBox = true;
      this.showLoginBox = false;
    },
    switchToLogin() {
      this.showLoginBox = true;
      this.showSignupBox = false;
    },
    showContact() {
      this.showContactBox = true;
    }
  }
};
</script>




<style>
body {
  background-color: rgb(238, 216, 248);
}

.navbar-nav, .form {
  width: fit-content;
}

.nav-link {
  position: relative;
  color: purple;
  display: inline-block;
  z-index: 0;
}


.nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 12.5%; 
  bottom: -4%; 
  left: 0;
  background-color: purple;
  color: rgb(238, 216, 248);
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

.nav-link:hover {
  z-index: 10;
}

.nav-link:hover::after {
  visibility: visible;
  transform: scaleX(1);
}

.btn-login {
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 30% 75%;
  cursor: pointer;
 
}

.btn-login:hover {
  background-color: rgb(238, 216, 248);
  border: 2px solid  purple;
  color: purple;
}

.login-box, .signup-box {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;

}

.login-box h4, .signup-box h4 {
  text-align: center;
  margin-bottom: 15px;
 
}


.btn-submit {
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 3% 6%;
  cursor: pointer;
  margin-left: 40%;
 
 
}

.btn-submit:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}

.navMoving {
  margin-left: 64%;
  margin-right: 1%;
}

.menu-toggle {
  display: none;
}

p-butt {
  display: block; 
  text-align: center; 
  margin-top: 10px; 
}


@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
  }

  .show .nav-links {
    display: block;
  }
}
</style>
