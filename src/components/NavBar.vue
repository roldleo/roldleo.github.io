<template>
  <nav
    class="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-sm z-50 p-4"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-black text-lg font-bold"></div>
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
        :class="{ block: menuOpen, hidden: !menuOpen }"
        class="hidden md:flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4"
      >
        <router-link
          to="/"
          exact-active-class="active"
          class="text-gray-500 hover:text-black transition duration-300"
          >Home</router-link
        >
        <router-link
          to="/portfolio"
          exact-active-class="active"
          class="text-gray-500 hover:text-black transition duration-300"
          >Portfolio</router-link
        >
        <!-- <router-link
          to="/contact"
          exact-active-class="active"
          class="text-gray-500 hover:text-black transition duration-300"
          >Contact</router-link
        > -->
      </div>
      <div></div>
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
  },
};
</script>

<style scoped>
.active {
  color: black;
}
</style>
