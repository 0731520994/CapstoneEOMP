<template>
  <div>
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal4" data-bs-whatever="@mdo">Edit</button>
      <div class="modal fade" id="exampleModal4" tabindex="-2" aria-labelledby="exampleModalLabel4" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel4">Edit User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="editForm" class="d-flex flex-column gap-5">
                  <input type="text" v-model="addUser.firstName" placeholder="name" name="" id="" required>
                  <input type="text" v-model="addUser.lastName" placeholder="surname" name="" id="" required>
                  <input type="text" v-model="addUser.gender" placeholder="gender" name="" id="" required>
                  <input type="text" v-model="addUser.emailAdd" placeholder="email" name="" id="" required>
                  <input type="text" v-model="addUser.userPass" placeholder="password" name="" id="" required>
                  <input type="text" placeholder="userRole" name="" id="" required>
                  <input type="text" v-model="addUser.profileUrl" placeholder="image" name="" id="" required>
                  <button type="submit" class="btn">Update</button>
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
      addUser:{
      userID: "",
      firstName: "",
      lastName: "",
      Gender: "",
      emailAdd: "",
      userPass: "",
      userProfile: ""
    }
  }
},
methods:{
        async editForm(){
          this.$store.dispatch('editUser', this.addUser)
        },
      }
  }
</script>