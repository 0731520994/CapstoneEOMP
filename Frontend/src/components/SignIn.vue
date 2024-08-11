<!-- <template>

  <div>
    <div class="row">
      <div
        class="col-6" id="formss"
        style="display: flex; justify-content: center; align-items: center"
      >
        <h1>WELCOME BACK</h1>
      </div>
      
        <form >

      <div>
      <div class="sign-fluid">
        <form >
          <h2>Sign In</h2>

                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.emailAdd" required>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="payload.userPass" required>
                </div>
                <button @click.prevent="login" type="button" class="submit-in">Login</button>
            </form>
      
    </div>
  </div>
            </form>
      </div>
   </div>

  

</template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
    export default {
        data() {
            return {
                payload: {
                    emailAdd: "",
                    userPass: ""
                }
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            login() {
                this.$store.dispatch("login", this.payload)
            }
        },
        beforeCreate() {
            this.$store.dispatch('fetchUsers')
        },
        mounted() {
            console.log(cookies.get('LegitUser'));
        },
    }

</script>
 -->

<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h4 class="h4-login">Login</h4>
      <form @submit.prevent="login">
        
        <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.emailAdd" required>
                </div>
                
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="payload.userPass" required>
                </div>
        
        <button type="submit" class="btn-submit">Login</button>
        <p class="upaccount">Don't have an account? <a href="#" @click.prevent="switchToSignup">Sign up</a></p>
      </form>
    </div>
  </div>
</template>

<script>

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {

  props: ['show'],
  data() {
    
    return {
       payload: {
          emailAdd: "",
          userPass: ""
       }
     }
  },


  computed: {
            user() {
                return this.$store.state.user
            }
        },

  methods: {
    close() {
      this.$emit('close');
    },
    switchToSignup() {
      this.$emit('switchToSignup');
    },
  //   login() {
  //     // Implement login logic
  //     console.log('Login with:', this.loginEmail, this.loginPassword);
  //     this.close();
  //   }
  // }

  login() {
                this.$store.dispatch("login", this.payload)
            }
        },
        beforeCreate() {
            this.$store.dispatch('fetchUsers')
        },
        mounted() {
            console.log(cookies.get('LegitUser'));
        }


};
</script>

<style scoped>

.form-control {
  background-color: rgb(238, 216, 248);
  border: 0.5px solid rgb(151, 150, 150);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: rgb(238, 216, 248);
  padding: 20px;
  width: 600px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}


.btn-submit {
  margin-top: 4%;
  margin-bottom: 1%;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 3% 5%;
  cursor: pointer;
  margin-left: 30%;
  width: 35%;
 
 
}

.btn-submit:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}

.navMoving {
  margin-left: 56%;
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


.h4-login {
  text-align: center;
  margin-bottom: 15px;
 
}

.upaccount{
  display: block; 
  text-align: center; 
  margin-top: 10px; 
  color: black;
}

</style>
