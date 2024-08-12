<template>
  <BiodataComponent />
  <EducationComponent />
  <WorkExperienceComponent />
  <SkillsComponent />
</template>

<script>
// import CarouselSlider from "../components/CarouselSlider.vue";
import SkillsComponent from "../components/SkillsComponent.vue";
import BiodataComponent from "../components/homepageBiodata.vue";
import EducationComponent from "../components/EducationComponent.vue";
import WorkExperienceComponent from "../components/WorkExperienceComponent.vue";

export default {
  name: "HomePage",
  components: {
    BiodataComponent,
    SkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
  },
  mounted() {
    this.setTextWidth();
    window.addEventListener("resize", this.setTextWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setTextWidth);
  },
  methods: {
    setTextWidth() {
      const typingText = this.$refs.typingText;
      if (typingText) {
        const textWidth = typingText.scrollWidth;
        typingText.style.setProperty("--typing-width", `${textWidth}px`);
      }
    },
  },
};
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: var(--typing-width);
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

.animate-typing {
  display: inline-block;
  width: var(--typing-width, auto);
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  animation: typing 1s steps(30, end) 1s 1 normal both,
    blink 0.75s step-end infinite;
}
</style>
