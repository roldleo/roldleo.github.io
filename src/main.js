// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'
import 'aos/dist/aos.css'
import AOS from 'aos'
import IntersectionObserverDirective from './directives/IntersectionObserver.js'

const app = createApp(App)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
})
app.use(store)
app.use(router)
app.directive('intersection', IntersectionObserverDirective)
app.mount('#app')
