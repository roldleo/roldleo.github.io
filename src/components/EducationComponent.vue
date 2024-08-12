<template>
  <div class="mx-auto p-10">
    <div class="px-12">
      <h3 class="text-xl font-semibold mb-2">Education</h3>

      <div
        v-for="item in educationItem"
        :key="item.id"
        class="items-center mb-1 mx-3 px-3 py-1 rounded text-lg"
      >
        <div class="ml-2 flex justify-between">
          <div class="">
            <p class="font-semibold">{{ item.name }}</p>
            <div class="flex text-sm">
              <p class="me-2">{{ item.jurusan }}</p>
              <p class="">|</p>
              <p class="ms-2">{{ item.gpa }} GPA</p>
            </div>
          </div>
          <div>
            <p>{{ item.location }}</p>
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
.container {
  max-width: 800px;
}
</style>
