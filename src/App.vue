<template>
  <HeaderMe />

  <router-view></router-view>
</template>

<script>
import HeaderMe from "./components/HeaderMe.vue";

export default {
  name: "App",
  components: {HeaderMe},
};
</script>

<style></style>
