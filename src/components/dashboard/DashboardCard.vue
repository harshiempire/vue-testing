<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
    <h2 class="text-xl font-semibold mb-4">{{ title ?? '' }}</h2>
    <slot></slot>
  </div>
</template>