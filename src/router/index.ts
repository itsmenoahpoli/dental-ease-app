import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/auth",
      component: () => import("~/layouts/auth-layout.vue"),
      children: [
        {
          path: "/auth/login",
          name: "auth-login",
          component: () => import("~/views/auth/login.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("~/layouts/dashboard-layout.vue"),
      children: [
        {
          path: "/dashboard/home",
          name: "dashboard-home",
          component: () => import("~/views/dashboard/home.vue"),
        },
      ],
    },
  ],
});

export { router };
