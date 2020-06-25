import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
// import Mine from "@/views/Mine.vue";
// import Explore from "@/views/Explore.vue";
// import Download from "@/views/Download.vue";

// import MineHome from "@/views/MineHome.vue";
// import Personage from "@/views/Personage.vue";

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
    name: "Explore",
    component: () => import( /* webpackChunkName: "explore" */ "../views/Explore.vue")
  },
  {
    path: "/mine",
    component: () => import( /* webpackChunkName: "mine" */ "../views/Mine.vue"),
    children:[  
      {
        path:"",
        name:'MineHome',
        component: () => import( /* webpackChunkName: "minehome" */ "../views/MineHome.vue"),
      },
      {
        path:'personage',
        name:"Personage",
        component: () => import( /* webpackChunkName: "personage" */ "../views/Personage.vue"),
      },
      {
        path:"*",
        redirect: "/mine"
      }
    ]
  },
  {
    path: "/download",
    name: "Download",
    component: () => import( /* webpackChunkName: "download" */ "../views/Download.vue")
  },
  {
    path:'*',
    redirect: '/',
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
