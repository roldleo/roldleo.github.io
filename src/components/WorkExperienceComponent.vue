<template>
    <div class="mx-auto p-10">
        <div class="md:px-12">
            <h3 data-aos="fade-right" class="text-xl font-bold mb-2">Work Experiences</h3>

            <div v-for="item in workItem" :key="item.id" class="items-center mb-1 md:mx-3 md:px-3 py-1 rounded">
                <div class="md:ml-2 pb-4">
                    <div class="flex">
                        <p data-aos="fade-up" class="me-1 font-semibold text-lg md:text-xl">{{ item.name }}</p>
                        <!-- <p class="text-gray-500 italic">({{ item.status }})</p> -->
                    </div>
                    <div class="md:flex text-base md:text-lg">
                        <p data-aos="fade-up" class="me-2">{{ item.posisi }}</p>
                        <p data-aos="fade-up" class="hidden md:block">|</p>
                        <p data-aos="fade-up" class="md:ms-2">{{ item.dateRange }}</p>
                    </div>
                    <ul class="list-disc pl-5 text-base md:text-lg">
                        <li data-aos="fade-up" v-for="job in getJobDesksByWorkId(item.id)" :key="job.detail" class="text-lg mt-1">
                            {{ job.detail }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'WorkExperienceComponent',
    computed: {
        ...mapGetters(['getWorkExperiences', 'getJobDesksByWorkId']),
        workItem() {
            return this.getWorkExperiences
        },
    },
}
</script>

<style scoped>
.container {
    max-width: 800px;
}
</style>
