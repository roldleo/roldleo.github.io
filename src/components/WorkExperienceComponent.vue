<template>
  <div class="mx-auto p-10" v-intersection="'animate-slideIn'">
    <div class="md:px-12">
      <h3 class="text-xl font-semibold mb-2">Work Experiences</h3>

      <div
        v-for="item in workItem"
        :key="item.id"
        class="items-center mb-1 mx-3 px-3 py-1 rounded"
      >
        <div class="md:ml-2">
          <div class="flex">
            <p class="me-1 font-semibold text-xl">{{ item.name }}</p>
            <!-- <p class="text-gray-500 italic">({{ item.status }})</p> -->
          </div>
          <div class="md:flex text-lg">
            <p class="me-2">{{ item.posisi }}</p>
            <p class="hidden md:block">|</p>
            <p class="md:ms-2">{{ item.dateRange }}</p>
          </div>
          <ul class="list-disc pl-5">
            <li
              v-for="job in getJobDesksByWorkId(item.id)"
              :key="job.detail"
              class="text-lg mt-2"
            >
              {{ job.detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WorkExperienceComponent",
  computed: {
    ...mapGetters(["getWorkExperiences", "getJobDesksByWorkId"]),
    workItem() {
      return this.getWorkExperiences;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
