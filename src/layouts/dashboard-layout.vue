<script setup lang="ts">
import { SIDEBAR_ITEMS } from "~/statics";
import { ASSETS } from "~/constants";
</script>

<template>
  <div class="dashboard min-h-screen w-screen bg-slate-100 relative">
    <div class="dashboard-sidebar h-screen bg-slate-900 fixed top-0 left-0">
      <div class="p-5 mt-5 mb-10">
        <img :src="ASSETS.BRAND_LOGO_TRANSPARENT" alt="dentalease-dashboard.png" class="w-[400px] max-md:w-[80%]" />
      </div>

      <div class="flex flex-col gap-y-4">
        <div v-for="sidebarGroup in SIDEBAR_ITEMS" class="flex flex-col gap-y-3">
          <small class="text-slate-400 font-bold ml-4">{{ sidebarGroup.groupName }}</small>
          <RouterLink :to="items.url" v-for="items in sidebarGroup.children" class="text-sm text-white hover:text-slate-300 border">
            {{ items.label }}
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="dashboard-content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sidebarWidth: 300px;

.dashboard {
  &-sidebar {
    width: $sidebarWidth;
  }

  &-content {
    width: calc(100% - $sidebarWidth);
    margin-left: $sidebarWidth;
  }
}
</style>
