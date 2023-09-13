<template>
    <div>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
        data-bs-whatever="@mdo"
      >
        Edit
      </button>
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-2"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel4">Edit User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="editForm" class="d-flex flex-column gap-5">
                <input
                  type="text"
                  v-model="edUser.userID"
                  placeholder="id"
                  name=""
                  id=""
                  required
                />
                <input
                  type="text"
                  v-model="edUser.firstName"
                  placeholder="name"
                  name=""
                  id=""
                  required
                />
                <input
                  type="text"
                  v-model="edUser.lastName"
                  placeholder="surname"
                  name=""
                  id=""
                  required
                />
                <input
                  type="text"
                  v-model="edUser.emailAdd"
                  placeholder="email"
                  name=""
                  id=""
                  required
                />
                <input
                  type="text"
                  v-model="edUser.userProfile"
                  placeholder="image"
                  name=""
                  id=""
                  required
                />
                <button type="submit" class="btn">Save Changes</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        edUser: {
          userID: "",
          firstName: "",
          lastName: "",
          emailAdd: "",
          profileUrl: "",
        },
      };
    },
    methods: {
      async editForm() {
        this.$store.dispatch("UpdateUser", this.updateUser);
      },
    },
  };
  </script>