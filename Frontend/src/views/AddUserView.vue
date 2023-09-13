<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add User</button>
        <div class="modal fade" id="exampleModal" tabindex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Add Users</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addUser" class="d-flex flex-column gap-5">
                    <input type="text" v-model="userData.userID" placeholder="id" name="" id="">
                    <input type="text" v-model="userData.firstName" placeholder="name" name="" id="">
                    <input type="text" v-model="userData.lastName" placeholder="surname" name="" id="">
                    <input type="text" v-model="userData.gender" placeholder="surname" name="" id="">
                    <input type="text" placeholder="userRole" name="" id="" required>
                    <input type="text" v-model="userData.emailAdd" placeholder="email" name="" id="">
                    <input type="text" v-model="userData.userPass" placeholder="password" name="" id="">
                    <input type="text" v-model="userData.userProfile" placeholder="image" name="" id="">
                    <button type="submit" class="btn">Add</button>
                   </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
    data(){
    return{
      userData:{
        userID: "",
        firstName: "",
        lastName: "",
        Gender: "",
        emailAdd: "",
        userPass: "",
        profileUrl: ""
      }
    }
  },
  methods:{
          async addUser(){
            this.$store.dispatch('addUser', this.userData)
          },
        }
    }
</script>