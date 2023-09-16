<template>
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
                <button @click.prevent="login" type="button" class="submit">Login</button>
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

<style>

.sign-fluid{
  width: 60%;
  justify-content: center;
    height:25rem;
    margin-left: 30%;
    background-color: rgb(128, 0, 128);
    border-radius: 3rem;
    box-shadow: 10px 6px 4px 4px white;
    padding: 3rem;
    color: white;
    margin-top: 3rem;

    
}

h2{
  justify-content: center;
  text-align: center;
  
}


</style>