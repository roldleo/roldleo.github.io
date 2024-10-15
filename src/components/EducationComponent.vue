<template>
    <div class="mx-auto p-10">
        <div class="lg:px-12">
            <h3 data-aos="fade-right" class="text-xl font-bold mb-2">Education</h3>

            <div v-for="item in educationItem" :key="item.id" class="items-center mb-1 md:mx-3 md:px-3 py-1 rounded text-lg transition-transform duration-1000 ease-out transform">
                <div class="md:ml-2 md:flex justify-between">
                    <div data-aos="fade-right" class="pb-4 md:pb-0">
                        <p class="font-semibold text-lg md:text-xl">{{ item.name }}</p>
                        <div class="md:flex text-base md:text-lg">
                            <p class="me-2">{{ item.jurusan }}</p>
                            <p class="hidden md:block">|</p>
                            <p class="md:ms-2">{{ item.gpa }} GPA</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="flex flex-col md:items-end items-start">
                        <p class="font-semibold text-lg md:text-xl">{{ item.location }}</p>
                        <p class="text-base md:text-lg italic">{{ item.dateRange }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'EducationComponent',
    computed: {
        ...mapGetters(['getEducations']),
        educationItem() {
            return this.getEducations
        },
    },
}
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
