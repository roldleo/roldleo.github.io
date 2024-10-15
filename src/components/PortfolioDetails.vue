<template>
    <div class="mx-auto p-10 flex flex-col justify-center">
        <h1 data-aos="fade-right" class="text-6xl lg:ms-10 font-bold mb-2 pt-16">
            {{ portfolioItem.title }}
        </h1>
        <h2 data-aos="fade-right" class="text-xl lg:ms-10 text-gray-500">{{ portfolioItem.subTitle }}</h2>
        <div class="lg:flex lg:flex-row">
            <div data-aos="fade-up" class="lg:w-2/5 lg:flex lg:items-center lg:justify-center">
                <div class="flex items-center justify-center h-[50vh] mt-4">
                    <img :src="portfolioItem.image" alt="" class="h-full object-cover" />
                </div>
            </div>
            <div class="lg:w-3/5 md:pe-16">
                <p data-aos="fade-up" class="mt-4 font-medium">{{ portfolioItem.description }}</p>
                <p data-aos="fade-up" class="mt-3 text-justify font-normal" v-html="portfolioItem.fullDescription"></p>
                <div v-if="toolsUsed.length > 0" class="w-full mt-4 mb-4">
                    <h3 data-aos="fade-up" class="text-2xl font-semibold">Tools Used:</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <div data-aos="fade-up" v-for="tool in toolsUsed" :key="tool.id" class="p-4 flex items-center">
                            <img :src="tool.image" alt="" class="h-10" />
                            <span class="ml-2">{{ tool.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full pt-10 lg:ms-10">
            <p data-aos="fade-up" class="text-xl font-bold">Preview Project</p>
            <img data-aos="fade-up" class="w-full" :src="portfolioItem.image1" alt="" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'PortfolioDetail',
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    computed: {
        ...mapGetters(['getPortfolioItems', 'getTools']),
        portfolioItem() {
            return this.getPortfolioItems.find((item) => item.id === parseInt(this.id))
        },
        toolsUsed() {
            // Find the tools used by the current portfolio item
            if (this.portfolioItem && this.portfolioItem.toolsUse) {
                return this.portfolioItem.toolsUse.map((toolId) => this.getTools.find((tool) => tool.id === toolId)).filter(Boolean) // Filter out any undefined tools if an ID is not found
            }
            return []
        },
    },
}
</script>

<style scoped>
/* Add any additional styling here */
</style>
