<template>
  <div class="bg-gray-300">
    <NavBar />
    <div class="">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AppFooter,
  },
};
</script>

<style>
/* Add any global styling here */
</style>
