<template>
  <div v-intersection="'animate-slideIn'" class="mx-auto p-10">
    <div class="lg:px-12">
      <h3 class="text-xl font-semibold mb-2">Education</h3>

      <div
        v-for="item in educationItem"
        :key="item.id"
        class="items-center mb-1 mx-3 px-3 py-1 rounded text-lg transition-transform duration-1000 ease-out transform"
      >
        <div class="md:ml-2 md:flex justify-between">
          <div class="pb-4 md:pb-0">
            <p class="font-semibold">{{ item.name }}</p>
            <div class="md:flex text-sm">
              <p class="me-2">{{ item.jurusan }}</p>
              <p class="hidden md:block">|</p>
              <p class="md:ms-2">{{ item.gpa }} GPA</p>
            </div>
          </div>
          <div>
            <p class="font-semibold">{{ item.location }}</p>
            <p class="text-sm italic">{{ item.dateRange }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EducationComponent",
  computed: {
    ...mapGetters(["getEducations"]),
    educationItem() {
      return this.getEducations;
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
