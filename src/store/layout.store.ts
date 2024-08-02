import { defineStore } from "pinia";

type LayoutStoreState = {
  isSidebarCollapsed: boolean;
};

export const useLayoutStore = defineStore("auth-store", {
  state: () => {
    return {
      isSidebarCollapsed: false,
    } as LayoutStoreState;
  },
  actions: {
    SET_SIDEBAR_COLLAPSE(isCollapsed: boolean) {
      this.isSidebarCollapsed = isCollapsed;
    },
  },
});
