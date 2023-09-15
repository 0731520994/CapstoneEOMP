<template>
  <div class="container-flex-container">
    <ul class="alert alert-warning" v-if="err && err.length > 0">
      <li class="mb-0 ms-3" v-for="(error, index) in err" :key="index">
        {{ error }}
      </li>
    </ul>

    <div class="mb-3">
      <label for="exampleInputfirstName1" class="form-label">First Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputfirstName1"
        aria-describedby="emailHelp"
        v-model="userData.firstName"
        required
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputlastName1" class="form-label">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputlastName1"
        aria-describedby="emailHelp"
        v-model="userData.lastName"
        required
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputGender1" class="form-label">Gender</label>
      <select class="form-control" v-model="userData.gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email Address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="userData.emailAdd"
        required
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="userData.userPass"
        required
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputRole1" class="form-label">User Role</label>
      <select class="form-control" v-model="userData.userRole">
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="exampleInputUserUrl1" class="form-label">User URL</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputUserUrl1"
        v-model="userData.userUrl"
      />
    </div>

    <button @click.prevent="addUser" class="btn-submit">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        gender: "",
        emailAdd: "",
        userPass: "",
        userRole: "",
        userUrl: "",
      },
      err: [],
    };
  },
  methods: {
    addUser() {
      console.log(this.userData);

    },
  },
};
</script>
