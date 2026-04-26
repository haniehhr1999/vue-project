<template>
  <h1>users</h1>
  <div class="container">
    <div class="row g-3">
      <div v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="col-4" v-else v-for="user in users" :key="user.id">
        <UserCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCard from "@/components/UserCard.vue";

export default {
  components: { UserCard },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          users.value = res.data;
          loading.value = false;
        })
        .catch((err) => console.log(err));
    }
    getUsers();
  },
};
</script>

<style></style>
