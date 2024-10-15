<template>
    <div class="mx-auto p-10">
        <div class="md:px-12">
            <h3 data-aos="fade-right" class="text-xl font-bold mb-2">Skills</h3>
            <div class="flex flex-wrap">
                <div v-if="hardSkillsUsed.length > 0" class="w-full grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-4 grid-cols-2 justify-around">
                    <div data-aos="fade-up" v-for="tool in hardSkillsUsed" :key="tool.id" class="flex items-center mb-1 md:mx-3 md:px-3 py-1 rounded text-lg">
                        <img :src="tool.image" alt="" class="h-10 w-10 object-cover object-center transform" />
                        <span class="ml-2 text-sm font-semibold">{{ tool.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SkillsComponent',
    computed: {
        ...mapGetters(['getTools']),
        hardSkillsUsed() {
            const hardSkills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            return hardSkills.map((toolId) => this.getTools.find((tool) => tool.id === toolId)).filter(Boolean)
        },
    },
}
</script>

<style scoped></style>
