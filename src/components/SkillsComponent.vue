<template>
  <div class="mx-auto p-10">
    <div class="px-12">
      <h3 class="text-xl font-semibold mb-2">Skills</h3>
      <div class="flex flex-wrap">
        <div
          v-if="hardSkillsUsed.length > 0"
          class="w-full grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-4 grid-cols-2 justify-around"
        >
          <div
            v-for="tool in hardSkillsUsed"
            :key="tool.id"
            class="flex items-center mb-1 mx-3 px-3 py-1 rounded text-lg"
          >
            <img :src="tool.image" alt="" class="h-10 object-cover w-10" />
            <span class="ml-2">{{ tool.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SkillsComponent",
  computed: {
    ...mapGetters(["getTools"]),
    hardSkillsUsed() {
      const hardSkills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      return hardSkills
        .map((toolId) => this.getTools.find((tool) => tool.id === toolId))
        .filter(Boolean);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
