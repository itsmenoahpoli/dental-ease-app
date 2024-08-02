<script lang="ts" setup>
const $props = defineProps<{
  groupName: string;
  children: { label: string; url: string }[];
}>();

console.log($props);
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <small class="text-slate-400 font-bold"></small>
    <RouterLink to="/" class="text-sm text-white hover:text-slate-300 border"> // </RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
