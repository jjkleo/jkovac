import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/explore",
    name: "About",
    component: () => import( /* webpackChunkName: "explore" */ "../views/Explore.vue")
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import( /* webpackChunkName: "mine" */ "../views/Mine.vue")
  },
  {
    path: "/download",
    name: "Download",
    component: () => import( /* webpackChunkName: "download" */ "../views/Download.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
