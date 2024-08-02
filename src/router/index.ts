import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "~/constants";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTES.AUTH,
      component: () => import("~/layouts/auth-layout.vue"),
      children: [
        {
          path: ROUTES.AUTH_LOGIN,
          name: "auth-login",
          component: () => import("~/views/auth/login.vue"),
        },
      ],
    },
    {
      path: ROUTES.DASHBOARD,
      component: () => import("~/layouts/dashboard-layout.vue"),
      children: [
        {
          path: ROUTES.DASHBOARD_HOME,
          name: "dashboard-home",
          component: () => import("~/views/dashboard/home.vue"),
        },
      ],
    },
  ],
});

export { router };
