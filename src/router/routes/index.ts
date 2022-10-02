import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/DemoView.vue"),
  },
];

export default routes;
