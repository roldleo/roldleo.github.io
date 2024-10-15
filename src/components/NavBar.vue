<template>
    <nav :class="[navbarClasses, navbarBackground]" class="pt-4 fixed top-0 left-0 w-full z-20 px-4 md:px-8 lg:px-20 xl:px-28 transition-all duration-500">
        <div class="mx-auto flex justify-between items-center h-10 md:h-12">
            <div class="text-black text-lg font-bold md:flex-1">
                <router-link to="/"></router-link>
            </div>

            <!-- Hamburger -->
            <button @click="toggleNavbar" class="text-black md:hidden focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <!-- Mobile Navbar -->
            <div
                :class="{
                    'translate-x-0 opacity-100': isNavbarOpen,
                    '-translate-x-full opacity-0': !isNavbarOpen,
                }"
                class="fixed left-0 top-0 w-full h-16 transition-all duration-500 lg:hidden bg-gray-300"
            >
                <div class="flex justify-end items-center w-screen h-16 px-6">
                    <button @click="closeNavbar" class="text-black text-4xl">
                        <p>x</p>
                    </button>
                </div>
                <ul class="h-[calc(100vh-4rem)] -mt-[1px] w-screen text-center flex flex-col justify-center bg-gray-300 items-center text-lg font-semibold z-40">
                    <li class="relative flex items-center w-full justify-center h-14">
                        <router-link to="/" exact-active-class="active" class="text-gray-500 hover:text-black transition duration-300" @click="closeNavbar"> Home </router-link>
                        <div v-if="route.path === '/'" class="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-text to-transparent"></div>
                    </li>
                    <li class="relative flex items-center w-full justify-center h-14">
                        <router-link to="/portfolio" exact-active-class="active" class="text-gray-500 hover:text-black transition duration-300" @click="closeNavbar"> Portfolio </router-link>
                        <div v-if="route.path === '/portfolio'" class="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-text to-transparent"></div>
                    </li>
                </ul>
            </div>
            <!-- Web Navbar -->
            <div
                :class="{
                    'absolute block left-0 top-full w-full bg-gray-300 md:static backdrop-blur': menuOpen,
                    'hidden md:flex': !menuOpen,
                }"
                class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 z-10"
            >
                <router-link to="/" exact-active-class="active" class="text-gray-500 hover:text-black transition duration-300" @click="closeMenu"> Home </router-link>
                <router-link to="/portfolio" exact-active-class="active" class="text-gray-500 hover:text-black transition duration-300" @click="closeMenu"> Portfolio </router-link>
                <!-- Uncomment this if you want to add more links -->
                <!-- <router-link
    to="/contact"
    exact-active-class="active"
    class="text-gray-500 hover:text-black transition duration-300"
  >
    Contact
  </router-link> -->
            </div>

            <div class="hidden md:block flex-1"></div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAtTop = ref(true)
const navbarClasses = ref('')
const isNavbarOpen = ref(false)
const lastScrollPosition = ref(0)
const isNavbarHidden = ref(false)
const navbarBackground = ref('')

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value
    document.body.style.overflow = isNavbarOpen.value ? 'hidden' : ''
}

const closeNavbar = () => {
    isNavbarOpen.value = false
    document.body.style.overflow = ''
}

const handleScroll = () => {
    isAtTop.value = window.scrollY === 0
    const currentScrollPosition = window.scrollY
    isNavbarHidden.value = currentScrollPosition > lastScrollPosition.value && currentScrollPosition > 50
    lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(isNavbarHidden, (newVal) => {
    navbarClasses.value = newVal ? '-translate-y-full' : 'translate-y-0'
})

watch(isAtTop, (newVal) => {
    navbarBackground.value = newVal ? 'bg-transparent' : 'bg-gray-300/60 backdrop-blur-lg shadow-lg pt-0'
})
</script>

<style scoped>
.active {
    color: black;
}
</style>
