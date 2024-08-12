<template>
  <div class="container mx-auto pt-16 px-4 h-screen">
    <h1 class="text-4xl font-bold">My Project</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div
        v-for="item in portfolioItems"
        :key="item.id"
        class="border rounded shadow p-4"
      >
        <router-link :to="`/portfolio/${item.id}`">
          <h2 class="text-xl font-bold">{{ item.title }}</h2>
          <p>{{ item.subTitle }}</p>
          <div class="flex items-center justify-center h-[25vh]">
            <img :src="item.image" alt="" class="h-full object-cover" />
          </div>
          <p>{{ item.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PortfolioPage",
  computed: {
    ...mapGetters(["getPortfolioItems"]),
    portfolioItems() {
      return this.getPortfolioItems;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
