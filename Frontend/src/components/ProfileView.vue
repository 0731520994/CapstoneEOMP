<template>
    <div>
        <div class="container">
          <div class="car">
          <div class="card" v-if="user" style="width: 30rem; height: 30rem; display: flex; justify-content: center; align-items: center;">
  <img :src="user.profileUrl" class="card-img-top" :alt="user.firstName">
  <div class="card-body">
    <h5 class="card-title">ID: {{ user.userID }}</h5>
    <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
    <h5 class="card-text">userRole </h5>
    <button class="btn" id="btn-btnp" @click="logOut">Log Out</button>
  </div>
</div>
</div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="card" style="width: 25rem; height: 20rem; display: flex; justify-content: center; align-items: center;">
              <h2>Edit Your Account</h2>
  <div class="card-body">
    <h5 class="card-title">Enter User ID When Editing</h5>
    <button class="btn"><EditProfile/></button>
  </div>
</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card" style="width: 25rem; height: 20rem; display: flex; justify-content: center; align-items: center;">
              <h2>Change Your Password</h2>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <button class="btn"><ChangePass/></button>
  </div>
</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card" style="width: 25rem; height: 20rem; display: flex; justify-content: center; align-items: center;">
              <h2>Delete Your Account</h2>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <button class="btn"><EditProfile/></button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import EditProfile from '@/components/EditProfile.vue'
import ChangePass from '@/components/ChangePass.vue'
    export default {
      components: {
        EditProfile,
        ChangePass
      },

    computed: {
    thisUser() {
      return this.$store.state.user;
    },
  },
    beforeCreate() {
    this.$store.dispatch("fetchUser");
    },
    mounted() {
    console.log(cookies.get("LegitUser"));
    },
    created() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }

      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        this.$store.commit("setUser", data)
      }
    },
    methods: {
          logOut() {
            this.$store.dispatch("logOut")
          },
        },
        
    }
</script>''