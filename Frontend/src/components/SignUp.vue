<!-- <template>
  <form @submit.prevent="addUser">
  <div class="sigUp-fluid">
    <h2>Sign Up</h2>
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
      <select class="form-control">
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
        v-model="userData.profileUrl"
      />
    </div>
    <button type="submit" class="up-submit">Submit</button>
    </div>
</form>
  
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
        profileUrl: "",
      },
      
    };
  },

  methods: {
  addUser() {
    console.log(this.userData);
    this.$store.dispatch('register', this.userData);
  }
}



 
}
</script>

 -->

 <template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h4 class="h4-register">Sign Up</h4>
      
      <ul class="alert alert-warning" v-if="err && err.length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in err" :key="index">
          {{ error }}
        </li>
      </ul>

      <form @submit.prevent="addUser">
        <div class="mb-3">
          <label for="exampleInputfirstName1" class="form-label">First Name</label>
          <input type="text" class="form-control" id="exampleInputfirstName1" v-model="userData.firstName" required/>
        </div>

        <div class="mb-3">
          <label for="exampleInputlastName1" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="exampleInputlastName1" v-model="userData.lastName" required />
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
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="userData.emailAdd" required />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="userData.userPass" required/>
        </div>

        <!-- <div class="mb-3">
          <label for="exampleInputRole1" class="form-label">User Role</label>
          <select class="form-control" v-model="userData.role">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="exampleInputUserUrl1" class="form-label">User URL</label>
          <input type="text" class="form-control" id="exampleInputUserUrl1" v-model="userData.profileUrl"/>
        </div> -->

        <button type="submit" class="btn-submit">Sign Up</button>
        <p class="inaccount">Already have an account? <a href="#" @click.prevent="switchToLogin">Sign In</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        gender: "",
        emailAdd: "",
        userPass: "",
        role: "",
        profileUrl: "",
      },
      err: []  // Assuming you have an error handling array
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    switchToLogin() {
      this.$emit('switchToLogin');
    },
    addUser() {
      console.log(this.userData);
      this.$store.dispatch('register', this.userData);
    }
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

.h4-register {
  text-align: center;
  margin-bottom: 15px;
}

.inaccount {
  display: block; 
  text-align: center; 
  margin-top: 10px; 
  color: black;
}
</style>
