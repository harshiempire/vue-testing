<script setup lang="ts">
import type { QuickInsight } from '@/types/dashboard';

defineProps<{
  insight: QuickInsight;
}>();
</script>

<template>
  <div class="bg-white rounded-xl border border-[#ECECEC] p-4">
    <div class="flex justify-between items-start mb-2">
      <span class="text-2xl">{{ insight.icon }}</span>
      <div v-if="insight.trend" class="flex items-center">
        <span 
          class="text-sm"
          :class="insight.trend.direction === 'up' ? 'text-green-500' : 'text-red-500'"
        >
          {{ insight.trend.direction === 'up' ? '↑' : '↓' }} {{ insight.trend.value }}
        </span>
      </div>
    </div>
    <div class="text-2xl font-bold mb-1">{{ insight.value }}</div>
    <div class="text-sm text-gray-600">{{ insight.label }}</div>
  </div>
</template>