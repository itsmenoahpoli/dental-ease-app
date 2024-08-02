<script lang="ts" setup>
import { ASSETS } from "~/constants";
</script>

<template>
  <div class="h-screen w-screen">
    <div class="h-full flex flex-col items-center gap-y-4 pt-[10%]">
      <img :src="ASSETS.BRAND_LOGO" alt="dentalease-dashboard.png" class="w-[300px] max-md:w-[80%]" />
      <div class="w-[400px] mt-10" style="zoom: 0.85">
        <RouterView />

        <div class="text-center text-xs text-gray-700 mt-3">
          <p>&copy; All Rights Reserved. 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
