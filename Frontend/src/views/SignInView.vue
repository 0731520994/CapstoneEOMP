<template>
  <div>
    <div class="row">
      <div
        class="col-6" id="formss"
        style="display: flex; justify-content: center; align-items: center"
      >
        <h1>WELCOME BACK</h1>
      </div>
      <div class="col-6">
        <form >
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="payload.emailAdd" required>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="payload.userPass" required>
                </div>
                <button @click.prevent="login" type="button" class="btn btn-primary">Login</button>
            </form>
      </div>
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