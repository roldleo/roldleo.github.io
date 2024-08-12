<template>
  <div class="container mx-auto px-10">
    <h1 class="text-6xl lg:ms-10 font-bold mb-2 pt-16">
      {{ portfolioItem.title }}
    </h1>
    <h2 class="text-xl lg:ms-10 text-gray-500">{{ portfolioItem.subTitle }}</h2>
    <div class="lg:flex lg:flex-row">
      <div class="lg:w-2/5 lg:flex lg:items-center lg:justify-center">
        <div class="flex items-center justify-center h-[50vh] mt-4">
          <img :src="portfolioItem.image" alt="" class="h-full object-cover" />
        </div>
      </div>
      <div class="lg:w-3/5 pe-16">
        <p class="mt-4">{{ portfolioItem.description }}</p>
        <p class="mt-3 text-justify" v-html="portfolioItem.fullDescription"></p>
        <div v-if="toolsUsed.length > 0" class="mt-4 mb-4">
          <h3 class="text-2xl font-semibold">Tools Used:</h3>
          <div
            class="space-x-4 mt-2 grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-4 grid-cols-2 justify-around w-full"
          >
            <div
              v-for="tool in toolsUsed"
              :key="tool.id"
              class="flex items-center me-4"
            >
              <img :src="tool.image" alt="" class="h-10 object-cover w-10" />
              <span class="ml-2">{{ tool.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <img class="w-full" :src="portfolioItem.image1" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PortfolioDetail",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getPortfolioItems", "getTools"]),
    portfolioItem() {
      return this.getPortfolioItems.find(
        (item) => item.id === parseInt(this.id)
      );
    },
    toolsUsed() {
      // Find the tools used by the current portfolio item
      if (this.portfolioItem && this.portfolioItem.toolsUse) {
        return this.portfolioItem.toolsUse
          .map((toolId) => this.getTools.find((tool) => tool.id === toolId))
          .filter(Boolean); // Filter out any undefined tools if an ID is not found
      }
      return [];
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
