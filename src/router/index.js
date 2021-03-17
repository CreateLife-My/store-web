import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue")
  },
  {
    path: "/product",
    name: "product",
    // component: () => import("../views/product/Product.vue")
    component: resolve => require(["@/views/product/Product.vue"], resolve)
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    console.log(to.name, from.name, savedPosition);
    // return 期望滚动到哪个的位置
  }
});

export default router;
