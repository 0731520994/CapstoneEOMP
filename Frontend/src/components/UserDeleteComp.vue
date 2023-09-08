<template>
    <tr class="table-row">
      <th class="table-head text-white">{{ user.userID }}</th>
      <td class="text-white">{{ user.firstName }}</td>
      <td class="text-white">{{ user.lastName }}</td>
      <td class="text-white">{{ user.Gender }}</td> 
      <td class="text-white emailAdd">{{ user.emailAdd }}</td>
      <td class="text-white password w-25">{{ user.userPass }}</td>
      <td class="text-white">{{ user.userRole }}</td>
      <td><img :src="user.userUrl" alt="" class="prodUrl" /></td>
  
      <td class="second-table-data">
        <div class="action">
          <button class="btn-edit">
            <router-link class="text-white text-decoration-none" :to="{ name: 'user edit', params: { id: user.userID } }">
              Edit
            </router-link>
          </button>
          <button class="btn-delete text-white" @click="deleteUser(user.userID)">
            Delete
          </button>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: ["user"],
    methods: {
      async deleteUser(id) {
        try {
          await axios.delete(`https://capstoneconnection.onrender.com/users/${id}`);
          this.$store.dispatch("getUsers");
          alert("User has been deleted");
        } catch (err) {
          alert(err);
        }
      },
    },
  };
  </script>