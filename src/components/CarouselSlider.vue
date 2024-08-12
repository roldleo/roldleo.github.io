<template>
  <div class="relative w-screen h-screen overflow-hidden bg-gray-600">
    <div
      class="flex transition-transform duration-500 ease-in-out h-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full h-full"
        @click="pauseAutoSlide"
      >
        <img
          :src="slide"
          alt="Slide Image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2"
    >
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="cursor-pointer w-3 h-3 rounded-full"
        :class="{
          'bg-white': currentIndex === index,
          'bg-gray-400': currentIndex !== index,
        }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselSlider",
  data() {
    return {
      currentIndex: 0,
      slides: [
        require("../assets/wireframe-inTouch.png"),
        require("../assets/Wireframe.png"),
        require("../assets/Wireframe.png"),
      ],
      autoSlideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
    },
    pauseAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
