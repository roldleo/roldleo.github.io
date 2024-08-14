// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import store from "./store";
import IntersectionObserverDirective from "./directives/IntersectionObserver.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.directive("intersection", IntersectionObserverDirective);
app.mount("#app");
