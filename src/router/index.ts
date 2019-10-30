import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Random from "../views/Random.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/categories",
    name: "categories",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Categories.vue")
  },
  {
    path: "/random",
    name: "random",
    component: () =>
      import("../views/Random.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
