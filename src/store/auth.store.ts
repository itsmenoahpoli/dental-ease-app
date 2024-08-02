import { defineStore } from "pinia";

type AuthStoreState = {
  user?: any;
  token?: string;
};

export const useAuthStore = defineStore("auth-store", {
  state: () => {
    return {
      user: undefined,
      token: undefined,
    } as AuthStoreState;
  },
  actions: {
    SET_AUTH_DATA(user: any, token: string) {
      this.user = user;
      this.token = token;
    },
  },
});
