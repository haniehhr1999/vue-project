<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{user.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">username : {{user.username}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">email : {{user.email}}</h6>
    
  </div>
</div>
</template>

<script>


export default {
  name: "UserCard",
  props : {
    user: Object
  }
};
</script>

<style></style>
