<template>
  <div class="relative w-full h-screen overflow-hidden">
    <div class="absolute w-full h-full flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="h-40 w-full flex items-center justify-center my-1">
          <img
            src="../assets/blackScreen.png"
            alt="Profile Picture"
            class="rounded-full h-40 w-40 object-cover bg-black"
          />
        </div>
        <div class="text-center">
          <div class="text-4xl mt-10 font-semibold font-mono">
            "Harold Leonardo Panjaitan"
          </div>
        </div>
        <div class="text-center px-5 py-4">
          Have an interest in application development, creating automated
          systems, and integrating data. Driven by curiosity and interest in
          creating solutions to problems.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BiodataComponent",
};
</script>

<style scoped></style>
