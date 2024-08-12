import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
// import ContactPage from "../pages/ContactPage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import PortfolioDetails from "@/components/PortfolioDetails.vue";

const routes = [
  { path: "/", component: HomePage },
  // { path: "/contact", component: ContactPage },
  { path: "/portfolio", component: PortfolioPage },
  {
    path: "/portfolio/:id",
    name: "PortfolioDetail",
    component: PortfolioDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
