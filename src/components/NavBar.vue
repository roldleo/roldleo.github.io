<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-300 z-50 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-black text-lg font-bold md:flex-1">
        <router-link to="/"></router-link>
      </div>
      <button
        @click="toggleMenu"
        class="text-black md:hidden focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        :class="{
          'absolute block left-0 top-full w-full bg-gray-300 md:static backdrop-blur':
            menuOpen,
          'hidden md:flex': !menuOpen,
        }"
        class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 z-10"
      >
        <router-link
          to="/"
          exact-active-class="active"
          class="text-gray-500 hover:text-black transition duration-300"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link
          to="/portfolio"
          exact-active-class="active"
          class="text-gray-500 hover:text-black transition duration-300"
          @click="closeMenu"
        >
          Portfolio
        </router-link>
        <!-- Uncomment this if you want to add more links -->
        <!-- <router-link
    to="/contact"
    exact-active-class="active"
    class="text-gray-500 hover:text-black transition duration-300"
  >
    Contact
  </router-link> -->
      </div>

      <div class="hidden md:block flex-1"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.active {
  color: black;
}
</style>
