<script setup lang="ts">
import { FwbButton } from "flowbite-vue";
import { SIDEBAR_ITEMS } from "~/statics";
import { ASSETS } from "~/constants";
</script>

<template>
  <div class="dashboard min-h-screen w-screen bg-slate-100 relative">
    <div class="dashboard-sidebar h-screen bg-green-900 fixed top-0 left-0">
      <div class="p-5 mt-5 mb-10">
        <img :src="ASSETS.BRAND_LOGO_TRANSPARENT" alt="dentalease-dashboard.png" class="w-[400px] max-md:w-[80%]" />
      </div>

      <div class="flex flex-col gap-y-4 px-1">
        <div v-for="sidebarGroup in SIDEBAR_ITEMS" class="border-b border-b-green-600 px-3 pb-3">
          <small class="text-[10px] text-white font-bold ml-2">{{ sidebarGroup.groupName }}</small>

          <div class="flex flex-col">
            <RouterLink
              v-for="item in sidebarGroup.children"
              :to="item.url"
              class="flex flex-row items-center gap-x-3 text-xs text-slate-100 rounded-lg hover:!text-white hover:bg-green-700 p-2"
            >
              <VueFeather :type="item.icon" size="18" />
              <span class="font-medium mt-1">
                {{ item.label }}
              </span>
            </RouterLink>
          </div>
        </div>

        <div class="w-full px-3">
          <FwbButton color="red" class="w-full text-xs">Log Out</FwbButton>
        </div>
      </div>
    </div>

    <div class="dashboard-content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sidebarWidth: 280px;

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
