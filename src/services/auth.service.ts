import { toast } from "vue3-toastify";
import { httpClient } from "~/api";
import { router } from "~/router";
import { useAuthStore } from "~/store";
import type { Credentials } from "~/types/auth";

export const AuthService = {
  login: async function (credentials: Credentials) {
    return await httpClient
      .post("auth/login", credentials)
      .then((response) => {
        const { user, token } = response.data;
        const { SET_AUTH_DATA } = useAuthStore();

        SET_AUTH_DATA(user, token);
        router.push({ name: "dashboard-home" });
      })
      .catch(() => {
        toast.error("Login failed, invalid credentials", {
          position: "top-center",
        });
      });
  },

  logout: async function () {
    return await httpClient
      .post("auth/logout")
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        toast.error("Logout failed, occured on server", {
          position: "top-center",
        });
      });
  },
};
